import React ,{useState}from "react";
import "../../css/admin/createtheme.css";

const CreateTheme = () => {

    const [fileInputState,setFileInputState]=useState("")
    const [previewSource,setPreviewSource]=useState()

    const handleFileInputChange=(e)=>{
        const file=e.target.files[0]
        // const file=e.target.files
        // console.log("FILE",file)
        previewFile(file)
    }
    
    const previewFile=(file)=>{
        const reader=new FileReader()        
        reader.readAsDataURL(file)
        reader.onloadend=()=>[
            setPreviewSource(reader.result)
        ]
    }

    const handelSubmitFile=(e)=>{
        console.log("submitting")
        e.preventDefault()
        if(!previewSource){
            return
        }
        uploadImage(previewSource)
    }

    const uploadImage=async(base64EncodedImage)=>{
      // console.log(base64EncodedImage)
      try {
          await fetch("/api/upload",{
              method:"POST",
              body:JSON.stringify({data:base64EncodedImage}),
              headers:{"Content-type":"application/json"}
          }).then((res)=>{
              return res.json()
          }).then((data)=>{
           

          }).catch((error)=>[
              console.log(error)
          ])
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <div className="ctheme-one">
        <h1 className="ctheme-h1">Add Theme</h1>
        <div className="ctheme-two">
          <div className="ctheme-two-child1">
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Theme Title"
            />
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Description"
            />
            <input type="text" className="ctheme-input1" placeholder="Price" />
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Theme Url"
            />
            <div className="ctheme-dropdown">
              <button className="ctheme-btn">Category</button>
              <div class="ctheme-dropdown-content">
                <p className="ctheme-p1">Educational</p>
                <p className="ctheme-p1">Sports</p>
                <p className="ctheme-p1">Services</p>
                <p className="ctheme-p1">Non Profit</p>
                <p className="ctheme-p1">Ecommerce</p>
                <p className="ctheme-p1">Portfolio</p>
              </div>
            </div>
            <input type="file" className="ctheme-input2" value={fileInputState} onChange={(e)=>{
               handleFileInputChange(e)
            }}/>
          </div>
          <div className="ctheme-two-child1">
            <img
              src=""
              alt="Please choose file to preview"
              className="ctheme-img1"
            />
          </div>
        </div>
        <button className="ctheme-btn2" onClick={(e)=>{
            handelSubmitFile()
        }}>Submit</button>
      </div>
    </>
  );
};

export default CreateTheme;
