import React from 'react'
// import { FaVideo, FaUserPlus, FaBars } from "react-icons/fa";
import { BsList, BsPersonPlusFill, BsFillCameraVideoFill } from "react-icons/bs";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      
      <div className="chatInfo">

        <span>Jane</span>

        <div className="chatIcons">
          <BsFillCameraVideoFill size={19}/>
          <BsPersonPlusFill size={19}/>
          <BsList size={21}/>
        </div>

      </div>

      <Messages/>
      <Input/>
      
    </div>
  )
}

export default Chat