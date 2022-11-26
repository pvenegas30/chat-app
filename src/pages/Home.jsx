import React, { useState } from 'react'
import Sidebar from './../components/Sidebar';
import Chat from './../components/Chat';

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

    </div>
  )
}

export default Home