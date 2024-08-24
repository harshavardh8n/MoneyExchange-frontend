import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

useEffect(()=>{
 navigate("/signin")
},[])
  return (
    <div>{}</div>
  )
}

export default Home