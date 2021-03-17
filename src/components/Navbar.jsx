import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


function Navbar() {
  return (
    <div>
      <div className='center'>
        <h1 className='heading'>Wall Gallery</h1>
        <Link className='showButton' to='/'>Home</Link>
        <Link className='showButton' to='/images'>Click to Show</Link>
      </div>
    </div>

  )
}

export default Navbar