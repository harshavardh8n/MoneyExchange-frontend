import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Usercomp from './Usercomp'





const Users = () => {


  const [usersearch,setusersearch] = useState("")
  const [userlist,setUserlist] = useState([])


  const getusers = async()=>{
    const token = localStorage.getItem("token");
    // console.log(token)
    const users = await axios.get(`https://money-exchange-backend.vercel.app/api/v1/user/otherusers?filter=${usersearch}`,{
      headers:{
        authorization:`Bearer ${token}`
      }
      
    })
    setUserlist(users.data.users)
    console.log(users.data)
  }

  useEffect(()=>{
    getusers();
  },[usersearch])

  // const userlist =[{
  //   username:"harshavardhan@gmail.com",
  //   password:"harshavardhan",
  //   firstName:"harshavardhan",
  //   lastName:"gaikwad",
  // },
  // {
  //   username:"malinga@outlook.com",
  //   password:"malinga",
  //   firstName:"malinga",
  //   lastName:"shrilankan",
  // }]
  return (
    <div><h2>Users</h2>
    <div className="searchbox">
      <input type="text" name="usersearch" id="usersearch" value={usersearch} onChange={(e)=>{
        setusersearch(e.target.value)
      }}/>
    </div>
    <div className="usernames">
      {userlist.map(user=>(
        <Usercomp  firstname={user.firstName} lastname={user.lastName} objectid ={user.userid}onclick={()=>{alert("sending money")}}/>
      ))}
    </div>
    </div>
  )
}

export default Users