import React, { useContext } from 'react'
import { BsList, BsPersonPlusFill, BsFillCameraVideoFill } from "react-icons/bs";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from './../context/ChatContext';

const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      
      <div className="chatInfo">

        <span>{data.user?.displayName}</span>

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