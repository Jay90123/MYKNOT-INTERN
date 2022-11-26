import React from "react";
import Rating from "./Rating";
import "../css/card.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data }) => {
  const navigate = useNavigate();
  // console.log("DATA",data)
  const userID = localStorage.getItem("userID");
  const themeID = data._id;

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  function addtoCart() {
    try {
      if (userID) {
        // fetch("http://localhost:3001/api/cart/addtocart", {
        fetch("https://myknot-official.herokuapp.com/api/cart/addtocart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            themeID: themeID,
            userID: userID,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.success);
            if (data.success === true) {
              toast.success("Added to cart successfully", toastoptions);
            } else {
              toast.error("Not added to cart", toastoptions);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.warning("Please login to add to cart", toastoptions);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div class="card-one">
        <div class="card-two">
          <img
            src={data.img}
            alt=""
            class="card-img1"
            onClick={() => {
              navigate(`/getparticulartheme/${data._id}`);
            }}
          />
        </div>
        <div class="card-three">
          <div class="card-three-child1">
            <p class="card-p1">{data.title}</p>
            {/* <p class="card-p2">{data.description}</p> */}
            <Rating value={4.5} review={2} />
            <div
              className="addtocart"
              onClick={() => {
                addtoCart();
              }}
            >
              <i class="fa-solid fa-cart-shopping cart-icon"></i>
            </div>
          </div>
          <div class="card-three-child2">
            <p class="card-p3">
              <a href={data.siteurl} target="_blank" class="card-anchor">
                Live Preview
              </a>
            </p>
            <p class="card-p4">
              <a href="" class="card-anchor">
                Buy at &#8377; {data.price}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
