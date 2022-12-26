import React, { useState } from "react";
import "../../css/admin/createtheme.css";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  function handelSubmit(){

  }
  return (
    <>
      <div className="ctheme-one">
        <h1 className="ctheme-h1">Add Category</h1>
        <div className="ctheme-two">
          <div className="ctheme-two-child1">
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Theme Title"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />

            {/* <div className="ctheme-dropdown">
              <button className="ctheme-btn">Category</button>
              <div className="ctheme-dropdown-content">
                {categoryarray.map((ele, index) => {
                  return (
                    <>
                      <p
                        className="ctheme-p1"
                        onClick={() => {
                          setCategory(`${ele}`);
                        }}
                      >
                        {ele}
                      </p>
                    </>
                  );
                })}
              </div>
            </div> */}
          </div>
          <div className="ctheme-two-child1">
            
          </div>
        </div>
        <button
          className="ctheme-btn2"
          onClick={(e) => {
            handelSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddCategory;
