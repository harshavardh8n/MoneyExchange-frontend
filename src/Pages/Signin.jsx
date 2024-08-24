import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Signup.css"
import { NavLink, useNavigate } from 'react-router-dom'

const Signin = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const Navigate = useNavigate();


  const handlesubmit=async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post("https://money-exchange-backend.vercel.app/api/v1/user/signin",{
      username:username,
      password:password,
    
    })
      if(response.status==200){
        alert(response.data.mssg)
        localStorage.setItem("token",response.data.token)
        // console.log(response)
        setUsername("")
        setPassword("")
        Navigate(`/dashboard?username=${username}`)
      }

    }
    
    
     catch (error) {
        alert("Invalid inputs or Email is taken");
    }
    

  }
  return (
    
    <>
    <div className='signcont'>
        <h2>Sign In</h2>
        <div className="info">
            <label htmlFor="email">Username</label>
            <input type="email" name="email" id="email" value={username} onChange={e=>setUsername(e.target.value)}/><br />
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/><br />
            
            <button onClick={handlesubmit} className="btn">Sign In</button>
            <NavLink to={"/signup"}><p>Dont have an account?</p></NavLink> 
        </div>
    </div>
    </>
  )
}


export default Signin