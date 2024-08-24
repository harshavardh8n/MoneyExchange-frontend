import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Users from '../components/Users';
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {

  const [balance,setbalance] = useState(0);
  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")

  const [searchparams] = useSearchParams();
  const username = searchparams.get("username")

  const getbalance = async()=>{
    const token = localStorage.getItem("token")
    const response = await axios.get("https://money-exchange-backend.vercel.app/api/v1/account/balance",{
      headers:{
        authorization:`Bearer ${token}`
      }
    })
    const ans = response.data.balance;
    console.log(ans);
    setbalance(ans);
  }

  const getUserInfo = async()=>{

    const token = localStorage.getItem("token");

    try {
      const user = await axios.get("https://money-exchange-backend.vercel.app/api/v1/user/getUser",{
      headers:{
        authorization:`Bearer ${token}`
      }
    })

    if(user.status==200){
      setFirstName(user.data.firstName);
      setlastName(user.data.lastName);
    }

    } catch (error) {
      console.log("Invalid user")
    }
    
  }


  useEffect(()=>{
    getbalance();
    getUserInfo();
  },)

 

  return (
    <>
    <h2>Hello {firstName} {lastName}</h2>
    <h3>balance is {balance}</h3>
    <Users/>
    </>
  )
}

export default Dashboard