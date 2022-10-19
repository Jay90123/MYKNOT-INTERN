import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"
import Appcontext from '../context/Appcontext'


const Overlaynav = () => {
    const mainstate=useContext(Appcontext)
    function closer(){
        mainstate.setOverlay(false)
    }
  return (
   <>
   
   {
    mainstate.overlay===true? <div className="overlay-nav">
    <ul className="overlay-list">
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}> <Link to="/">Home</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/aboutus">About Us</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}>Services</p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/contact">Contact Us</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/login">Login</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/register">Signup</Link></p></li>
    </ul>
</div>
:undefined
   }

   </>
  )
}

export default Overlaynav
