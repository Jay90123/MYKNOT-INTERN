import React, { useState } from "react";
import "../css/particulartheme.css";
import Navbar from "./Navbar";
import Review from "./Review";

const ParticluarTheme = () => {
  const [show,setShow]=useState(false)
  
  return (
    <>
      <Navbar />
      <h3 className="ptc-h3">EduHub - Education community</h3>
      <p className="ptc-pone">By Myknot</p>
      <div className="ptc-one">
        <div className="ptc-two">
          <div className="ptc-two-child">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/13/18/09/canyon-7589820_960_720.jpg"
              alt=""
              className="ptc-imgone"
            />
          </div>
          <h3 className="ptc-h3-three">Description</h3>
          <p className="ptc-pfive">Online education website</p>
          <button className="ptc-btnone overcut">Live Preview</button>
        </div>
        <div className="ptc-two">
          <div className="ptc-boxone">
            <h2 className="ptc-h2">Price : &#8377;500</h2>
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
        <button className="ptc-btnfive" onClick={()=>{
          show==false?setShow(true):setShow(false)
        }}>Rate product</button>
        {
          show==true?<div className="ptc-four">
          <input type="number" placeholder="Rating" className="ptc-inputone" />
          <textarea placeholder="Write your review here" className="ptc-textareaone" cols="30" rows="5"></textarea>
          <button className="ptc-btnfour">Submit</button>
        </div>:null
        }
        <Review/>
        
      </div>
    </>
  );
};

export default ParticluarTheme;
