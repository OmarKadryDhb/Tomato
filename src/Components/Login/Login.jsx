import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
export default function Login({setShowLogin}) {
    const [currentState , setCurrentState] = useState("Login")
  return <>
    <div className='login'>
        <form className='login-container'>
                <div className="title d-flex justify-content-between">
                    <h2>{currentState}</h2>
                    <img className='cross' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="inputs">
                    {currentState==="Login"?<></>:<input type="text" placeholder='Name' required />}
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button className=''>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
                {currentState==="Login"?
                <p>Create a New Account? <span onClick={()=>setCurrentState("Sign Up")}> Click Here</span> </p>:
                <p>Already Have an Account? <span onClick={()=>setCurrentState("Login")}> Login</span></p>}
        </form>
    </div>
  
  </>
  
}
