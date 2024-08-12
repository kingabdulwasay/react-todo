import React, { useEffect } from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const header = () => {
  
const navigate = useNavigate();
const home = () => {
  navigate('/')
  window.location.reload();
}
const signup = () => {
  navigate('/register')
}
const login = () => {
  navigate('/login')
}
  return (
    <div className='head'>
    <div  className="left" onClick={() => home()}>
        <span>A<span className='blue'>B</span>D<span className='blue'>U</span>L</span>
        <span> W<span className='blue'>A</span>S<span className='blue'>A</span>Y</span>
        <span> R<span className='blue'>A</span>I<span className='blue'>S</span></span>
    </div>
    <div className="center">
    <span>TO<span className='blue'> DO</span> LIST<span className='blue'> APP</span></span>
    </div>
    <div className="right">
      {
        localStorage.getItem("email") && localStorage.getItem("password") ? 
        <div className="author">
        <img src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${localStorage.getItem("email")}`} alt="" />
        <span>{localStorage.getItem("username")}</span>
      </div>
        : 
        <>
        <button onClick={() => signup()} className='btn'>Sign up</button>
        <button onClick={() => login()} className='btn'>Login</button>
        </>
      }
     
    </div>
    </div>
  )
}

export default header