import React from 'react'
import UserImage from "../assets/img/user1.png"
import { auth } from "../firebase";
import {signOut} from "firebase/auth"

const Navbar = () => {


  return (
    <div className='navbar'>
      

    <span className='logo'>Chat</span>

    <div className='user'>
      <img src={UserImage} alt=''/>
      <span>Pedro</span>
      <button onClick={() => signOut(auth)}>Logout</button>


    </div>

    </div>
  )
}

export default Navbar