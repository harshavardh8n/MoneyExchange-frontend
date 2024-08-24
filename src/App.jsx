import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
// import Main from './Pages/main'
import Sendmoney from './Pages/Sendmoney'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element = {<Signup/>}></Route>
      <Route path="/signin" element = {<Signin/>}></Route>
      <Route path="/dashboard" element = {<Dashboard/>}></Route>
      <Route path="/send" element={<Sendmoney/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/" element ={hello}></Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App