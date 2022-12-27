import React, { useContext } from "react";
import "../../css/admin/orders.css";
import Appcontext from "../../context/Appcontext";

const Productlist = () => {
  const mainstate = useContext(Appcontext);
  let count = 0;

  async function updateTheme(){

  }

  async function deleteTheme(themeID){
    try {
       if(themeID){
        await fetch("http://localhost:3001/api/themes/deletetheme",{
            method:"DELETE",
            headers: { "Content-type": "application/json",themeID },
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
       }else{
        console.warn("theme not selected")
        return
       }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div className="o-one">
        <h1 className="table-hone">Products</h1>
        <div className="o-two">
          <table className="o-table-control">
            <tr className="o-table-header">
              <th className="o-table-heading">Sl no</th>
              <th className="o-table-heading">Name of Product</th>
              <th className="o-table-heading">Category</th>
              <th className="o-table-heading">Item Price</th>
              <th className="o-table-heading">Preview</th>
              {/* <th className="o-table-heading">Status</th> */}
              <th className="o-table-heading">Options</th>
            </tr>
            {mainstate.themes
              ? mainstate.themes.map((ele, index) => {
                  return (
                    <>
                      <tr className="o-table-child-row1" key={index}>
                        <td className="o-table-data">{++count}</td>
                        <td className="o-table-data ">{ele.title}</td>
                        <td className="o-table-data">{ele.category}</td>
                        <td className="o-table-data">{ele.price}</td>
                        <td className="o-table-data">
                          <button>
                            <a
                              href={`${ele.siteurl}`}
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              View
                            </a>
                          </button>
                        </td>
                        {/* <td className="o-table-data o-table-data-process">PROCESSING</td> */}
                        <td className="o-table-data">
                          <p className="table-p1">
                            <i className="bi bi-pencil-square table-icon1 table-icon-o1" onClick={()=>{
                                updateTheme()
                            }} style={{"cursor":"pointer"}} ></i>
                            <i className="bi bi-trash3 table-icon1 table-icon-o2" onClick={()=>{
                                deleteTheme(ele._id)
                            }} style={{"cursor":"pointer"}}></i>
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </>
  );
};

export default Productlist;
