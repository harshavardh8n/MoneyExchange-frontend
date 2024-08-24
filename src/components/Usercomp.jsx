import React from 'react'
import "./Usercomp.css"
import { useNavigate } from 'react-router-dom'

const Usercomp = ({firstname,objectid,lastname,onclick}) => {
  const Navigate = useNavigate();
  const getinitial = (firstname)=>{
    return firstname[0];
  }
  return (
    <div className='usercomp'><div className="initial">{getinitial(firstname)}</div>
    <div className="name">{firstname} {lastname}</div>
    <div className="sendmoney">
      <button onClick={()=>{
        Navigate(`/send?id=${objectid}&name=${firstname}`)
      }}>Send money</button>
    </div>
    </div>

  )
}

export default Usercomp