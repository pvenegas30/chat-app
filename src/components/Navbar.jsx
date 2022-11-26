import React, { useContext } from 'react'
import { auth } from "../firebase";
import {signOut} from "firebase/auth"
import { AuthContext } from './../context/AuthContext';
import { FaPowerOff } from 'react-icons/fa';


const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}><span className='iconoff'>Logout</span> <FaPowerOff className='iconoff2'/></button>
      </div>

    </div>
  )
}

export default Navbar