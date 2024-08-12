import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()
  
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const saveData = () => {
localStorage.setItem('username', username)
localStorage.setItem('email', email)
localStorage.setItem('password', password)
navigate('/')
}

  return (
    <div className='signup-form'>
      <div className="signup">
     
      <span>Signup Form</span>
      <input type="text" placeholder='Enter name' onChange={(e)=>setUsername(e.target.value)} />
      <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Enter password' onChange={(e)=> setPassword(e.target.value)}/>
      <span className='note'>Already have an account?<Link to={'/login'} className='link'> Login </Link> </span>
      <button onClick={() => saveData()}>Signup Now</button>
      </div>
    </div>
  )
}

export default Register