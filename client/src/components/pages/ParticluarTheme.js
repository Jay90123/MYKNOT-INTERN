import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/particulartheme.css";
import Navbar from "./Navbar";
import Review from "./Review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ParticluarTheme = () => {
  const [show, setShow] = useState(false);
  const [themedata, setThemeData] = useState();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const { id } = useParams();
  
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    fetch(`https://myknot-official.herokuapp.com/api/themes/getonetheme`, {
    // fetch(`http://localhost:3001/api/themes/getonetheme`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        themeID: id,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.theme);
        setThemeData(data.theme);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // let ids=[
  // '63557e212c6b7aaf8fbbad91',
  // '63557e702c6b7aaf8fbbad93',
  // '63557ebb2c6b7aaf8fbbad95',
  // '63557efd2c6b7aaf8fbbad97',
  // '63557fb02c6b7aaf8fbbad9a',
  // '63557fe92c6b7aaf8fbbad9c',
  // '6355803b2c6b7aaf8fbbad9e',
  // '635580a92c6b7aaf8fbbada0',
  // '635580e42c6b7aaf8fbbada2',
  // '6355811a2c6b7aaf8fbbada4',
  // '6355814c2c6b7aaf8fbbada6',
  // '6355817f2c6b7aaf8fbbada8',
  // '635581c12c6b7aaf8fbbadaa',
  // '6355823e2c6b7aaf8fbbadac',
  // '63561a6d96cda82dceba4d4a',
  // '63561ad796cda82dceba4d4c',
  // '63561b1896cda82dceba4d54',
  // '63561b9396cda82dceba4d5c',
  // '63561c5796cda82dceba4d5e',
  // '63561c9c96cda82dceba4d60',
  // '63561ce296cda82dceba4d62',
  // '63561d1e96cda82dceba4d64',
  // '63561ded96cda82dceba4d66',
  // '63561e3696cda82dceba4d68',
  // '63561e6796cda82dceba4d6a',
  // '63561eae96cda82dceba4d6c']
  // let abc=[]
  // ids.forEach((ele,index)=>{
  //    fetch(`http://localhost:3001/api/themes/getonetheme`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       themeID: ele,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       abc.push(data)
  //       return data
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // })
  // console.log(abc)

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

 async function submitHandler() {
    if(!rating||!comment){
      toast.warning("Please fill all the fields",toastoptions)
      return
    }else{
    if(!userID){
        toast.warning("Please login to rate product",toastoptions)
        return
    }else{
      if(rating>5 || rating<0){
        toast.warning("Please rate in range of 5",toastoptions)
        return
      }else{
        setShow(false)
        try {
          // await fetch(`http://localhost:3001/api/auth/getuserdetails`, {
          await fetch(`https://myknot-official.herokuapp.com/api/auth/getuserdetails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            userID: userID,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if(data.success==true){
              // console.log("data",data.user.name)
              
              setTimeout(()=>{
                // fetch(`http://localhost:3001/api/themes/createreview`, {
                fetch(`https://myknot-official.herokuapp.com/api/themes/createreview`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                themeID: id,
                userID: userID,
                // userName:username
                userName:data.user.name
              },
              body: JSON.stringify({
                rating:rating,
                comment:comment
            })
            })
              .then((res) => {
                return res.json();
              })
              .then((data2) => {
                window.location.reload(true)
                return data2
              })
              .catch((error) => {
                console.log(error);
              });
              },1000)
            
            }
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("error",error)
        }
      }
    }
  }
  }

  return (
    <>
      <Navbar />
      {themedata ? (
        <>
          <h3 className="ptc-h3">{themedata.title}</h3>
          <p className="ptc-pone">By Myknot</p>
          <div className="ptc-one">
            <div className="ptc-two">
              <div className="ptc-two-child">
                <img src={themedata.img} alt="" className="ptc-imgone" />
              </div>
              <h3 className="ptc-h3-three">Description</h3>
              <p className="ptc-pfive">{themedata.description}</p>
              <a
                className="ptc-btnone overcut"
                href={themedata.siteurl}
                target="_blank"
              >
                Live Preview
              </a>
            </div>
            <div className="ptc-two">
              <div className="ptc-boxone">
                <h2 className="ptc-h2">Price : &#8377;{themedata.price}</h2>
                <p className="ptc-ptwo">&#10003; Quality checked by Myknot</p>
                <p className="ptc-ptwo">
                  &#10003; Included:6 months support from Myknot
                </p>
                <p className="ptc-ptwo">&#10003; Well Documented</p>
                <button className="ptc-btntwo">Buy Now</button>
                <button className="ptc-btntwo">Add to cart</button>
              </div>
            </div>
          </div>

          <div className="ptc-three">
            <h3 className="ptc-h3-two">Reviews</h3>
            <button
              className="ptc-btnfive"
              onClick={() => {
                show == false ? setShow(true) : setShow(false);
              }}
            >
              Rate product
            </button>
            {show == true ? (
              <div className="ptc-four">
                <input
                  type="number"
                  placeholder="Rating"
                  className="ptc-inputone"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
                <textarea
                  placeholder="Write your review here"
                  className="ptc-textareaone"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
                <button
                  className="ptc-btnfour"
                  onClick={() => {
                    submitHandler();
                  }}
                >
                  Submit
                </button>
              </div>
            ) : null}
            {themedata
              ? themedata.reviews.map((ele, index) => {
                  return <Review data={ele} />;
                })
              : null}
          </div>
        </>
      ) : null}
      <ToastContainer/>
    </>
  );
};

export default ParticluarTheme;
