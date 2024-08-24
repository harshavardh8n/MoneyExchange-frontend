import React from 'react'
import "./Sendmoney.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const Sendmoney = () => {
    const [params] = useSearchParams();
    const name = params.get("name");
    const id = params.get("id");
    const [amount,setamount] = useState(0);
    const Navigate = useNavigate();
    // const id = params.id;


    const transfermoney = async(e)=>{
        e.preventDefault();

        try {

            const token = localStorage.getItem("token")
            const Transaction = await axios.post("https://money-exchange-backend.vercel.app/api/v1/account/transfer",
                {
                    to:id,
                    amount:amount
                },
                {
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                    
                }  
            )
            if(Transaction.status==200){
                console.log(Transaction.data)
                Navigate("/dashboard");
            }
            
        } catch (error) {
            
            return alert("Insufficient money")

        }
       
        

    }
  return (
    <div>
        <div className="sendcont">
            <h2>Send Money to </h2>
            <h3>{name}</h3>
            <label htmlFor="amount">Amount (in Rs)</label>
            <input type="number" name="amount" id="amount" placeholder='Enter the amount to send'value={amount} onChange={e=>{
                setamount(e.target.value)
                console.log(amount)}}/>
            <button className='transferbtn' onClick={transfermoney}>Initiate Transfer</button>
        </div>

    </div>
  )
}

export default Sendmoney