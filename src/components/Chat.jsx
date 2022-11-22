import React from 'react'
import { BsList, BsPersonPlusFill, BsFillCameraVideoFill } from "react-icons/bs";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      
      <div className="chatInfo">

        <span className="titlecase1">Jane</span>

        <div className="chatIcons">
          <BsFillCameraVideoFill size={19} title="Videollamada"/>
          <BsPersonPlusFill size={19} title="Añadir al grupo"/>
          <BsList size={21} title="Más"/>
        </div>

      </div>

      <Messages/>
      <Input/>
      
    </div>
  )
}

export default Chat