import React, { useState } from 'react'
import Sidebar from './../components/Sidebar';
import Chat from './../components/Chat';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className='home'>
    <div className='container'>

      {visible && (
          <Sidebar setVisible={setVisible}/>
      )}

          <Chat setVisible={setVisible}/>
          </div>
          <div className='contact'>
          <a href="https://github.com/pvenegas30?tab=repositories" title='My GitHub' target="_blank"><FaGithub className='contact1' size={"40px"}/></a>
          <a href="https://www.linkedin.com/in/pedro-venegas-086bb8205/" title='My LinkedIn' target="_blank"><FaLinkedinIn className='contact1' size={"40px"}/></a>
          </div>
    
    </div>
  )
}

export default Home