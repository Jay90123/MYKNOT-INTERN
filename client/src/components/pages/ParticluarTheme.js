import React from 'react'
import "../css/particulartheme.css"
import Navbar from './Navbar'

const ParticluarTheme = () => {
  return (
   <>
   <Navbar/>
   <h3 className='ptc-h3'>EduHub - Education community</h3>
   <p className="ptc-pone">By Myknot</p>
   <div className="ptc-one">
    <div className="ptc-two">
      <div className="ptc-two-child">
      <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='ptc-imgone' />
      </div>
      <button className="ptc-btnone">Live Preview</button>
    </div>
    <div className="ptc-two">
      <div className="ptc-boxone">
        <h2 className='ptc-h2'>Price : &#8377;500</h2>
        <p className='ptc-ptwo'>&#10003;  Quality checked by Myknot</p>
        <p className='ptc-ptwo'>&#10003;  Included:6 months support from Myknot</p>
        <p className='ptc-ptwo'>&#10003;  Well Documented</p>
        <button className="ptc-btntwo">Buy Now</button>
        <button className="ptc-btntwo">Add to cart</button>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default ParticluarTheme
