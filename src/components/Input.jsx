import React from 'react'
import { FaImage, FaPaperclip } from "react-icons/fa";

const Input = () => {
  return (
    <div className='input'>
      
      <input type="text" placeholder='Type something....' />
    
    <div className="send">

      <FaPaperclip/>

      <input type="file" style={{display:"none"}} id='file' />

      <label htmlFor='file'>
        <FaImage/>
      </label>

      <button>Send</button>
    </div>
    
    </div>
  )
}

export default Input