import React from 'react'
import UserImage from "../assets/img/user1.png"

const Massage = () => {
  return (
    <div className='message owner'>
      
      <div className="messageInfo">

        <img src={UserImage} alt="" />
        <span>just now</span>

      </div>

      <div className="messageContent">

        <p >hello</p>
        <img src={UserImage} alt="" />

      </div>

    </div>
  )
}

export default Massage