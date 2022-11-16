import React from 'react'
import UserImage from "../assets/img/user1.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      

    <span className='logo'>Chat</span>

    <div className='user'>
      <img src={UserImage} alt=''/>
      <span>Pedro</span>
      <button>logout</button>


    </div>

    </div>
  )
}

export default Navbar