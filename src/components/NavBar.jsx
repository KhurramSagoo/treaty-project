import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <>
    
    <div className="container">
        <div className="logo-div">
        <img src={logo} alt="logo" className='logo' />
        <p className='brand'>treaty</p>

        </div>
        <div className="links">
<ul>
    <li>
        <a href="#" className='link-a'>Home</a>
        <a href="#" className='link-a'>About us</a>
        <a href="#" className='link-a'>Services</a>
        <a href="#" className='link-a'>Contact us</a>
    </li>
</ul>

        </div>
        <div className="btn-div">
            <button className='btn'>Login / Register</button>
        </div>
    </div>
    
    </>
  )
}

export default NavBar