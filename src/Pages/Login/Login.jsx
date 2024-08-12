import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate();
const signin = () => {
  if(localStorage.getItem("email") && localStorage.getItem("password")){
    if(localStorage.getItem("email") == email && localStorage.getItem("password") == password){
      navigate('/');
        }else{
          alert("Invalid Credentials")
        }
  }else{
    alert("PLease signup first")
  }

}

  return (
    <div className='login-form'>
      <div className="login">
      <span>Login Form</span>
      <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Enter password'  onChange={(e)=> setPassword(e.target.value)}/>
      <span className='note'>Don't have an account?<Link to={'/register'} className='link'> Signup </Link> </span>
      <button onClick={() => signin()}>Login Now</button>
      </div>
    </div>
  )
}

export default Login