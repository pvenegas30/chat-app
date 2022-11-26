import React from "react"
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = ({setVisible}) => {

  return (
    <div className="sidebar" id="sidebar">

          <Navbar />
          <Search />
          <Chats  setVisible={setVisible}/>

    </div>
  )
}

export default Sidebar
