import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./signup.css"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const Navigate = useNavigate();


  const handlesubmit=async(e)=>{
    e.preventDefault();

    try{
      console.log("works here");
      const response = await axios.post("https://money-exchange-backend.vercel.app/api/v1/user/signup",{
      username:username,
      password:password,
      firstName:firstName,
      lastName:lastName
    
    })
    console.log("object received")
      if(response.status==200){
        alert(response.data.message)
        localStorage.setItem("token",response.data.token)
        // console.log(response)
        setFirstName("")
        setLastName("")
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
        <h2>Sign Up</h2>
        <div className="info">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={username} onChange={e=>setUsername(e.target.value)}/><br />
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/><br />
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/><br />
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}/><br />
            <button onClick={handlesubmit} className="btn">Sign In</button>
              <NavLink to={"/signin"}><p>Already have an account?</p></NavLink> 
        </div>

    </div>
    </>
  )
}


export default Signup