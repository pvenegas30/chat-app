import React from 'react'
// import { FaVideo, FaUserPlus, FaBars } from "react-icons/fa";
import { BsList, BsPersonPlusFill, BsFillCameraVideoFill } from "react-icons/bs";

const Chat = () => {
  return (
    <div className='chat'>
      
      <div className="chatInfo">

        <span>Jane</span>

        <div className="chatIcons">
          <BsFillCameraVideoFill/>
          <BsPersonPlusFill/>
          <BsList/>
        </div>
      </div>
      
    </div>
  )
}

export default Chat