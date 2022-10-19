import React from 'react'
import "../css/login.css"

const Login = () => {
  return (
    <>
    
    <div className="l-one">
        <div className="l-two">

        </div>
       <div className="l-three">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="l-form">
          <div className="l-input-control">
            <input
              type="text"
              placeholder="Email"
              className="l-input-common"
              
            />
            <input
              type="password"
              placeholder="Password"
              className="l-input-common"
              
            />
          </div>
          <div className="l-formbtn">
            <button
              type="submit"
              className="l-formbtn-1"
             
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login
