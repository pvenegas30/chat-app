import React, { useContext } from 'react'
import { BsList, BsPersonPlusFill, BsFillCameraVideoFill } from "react-icons/bs";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from './../context/ChatContext';
import { FaArrowCircleRight } from 'react-icons/fa';

const Chat = ({setVisible}) => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      
      <div className="chatInfo">

        
      <button className="open" onClick={() => setVisible(true)}>
          <FaArrowCircleRight title='Open chats' size={28}/>
        </button>
        
        <span>{data.user?.displayName}</span>

        <div className="chatIcons">
          <BsFillCameraVideoFill size={19} className='iconoff' title="Videollamada"/>
          <BsPersonPlusFill className='iconoff' size={19} title="Añadir al grupo"/>
          <BsList size={21} title="Más"/>
        </div>

      </div>

      <Messages/>
      
      <Input/>
      
    </div>
  )
}

export default Chat