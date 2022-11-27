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
          <BsFillCameraVideoFill size={19} className='iconoff' title="Video call (not available at the moment)"/>
          <BsPersonPlusFill className='iconoff' size={19} title="Add to group (not available at the moment)"/>
          <BsList size={21} title="(not available at the moment)"/>
        </div>

      </div>

      <Messages/>
      
      <Input/>
      
    </div>
  )
}

export default Chat