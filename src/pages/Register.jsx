import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>

        <span className='logo'>LOGO</span>
        <span className='title'>Login</span>

        <form>
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="display name"/>
          <input type="password" placeholder="display name"/>
          <input type="file"/>

          <button>Sign Up</button>

        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register