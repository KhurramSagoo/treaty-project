import React from 'react';
import logo from '../assets/logo.png';
// import './nav.css'

const Nav = () => {
    const btn={
        backgroundColor: '#1E40AF', 
        color:'white', 
        fontWeight: 'bold',
         padding: '10px 40px', 
         borderRadius: '50px',
         border:"2px solid skyblue"
    }
  return (
    <div style={{ backgroundColor: 'white', padding: '10px' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
          <img src={logo} alt="Logo" style={{ height: '32px', width: '32px' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight:'500', marginLeft: '0.5rem' }}>treaty</h1>
        </div>

        {/* Links */}
        <ul style={{ display: 'flex', margin: '0 20px', }}>
          <li><a href="#" style={{ color: '#4B5563', textDecoration: 'none', margin: '0 20px' }}>Home</a></li>
          <li><a href="#" style={{ color: '#4B5563', textDecoration: 'none',margin: '0 20px' }}>About</a></li>
          <li><a href="#" style={{ color: '#4B5563', textDecoration: 'none',margin: '0 20px' }}>Services</a></li>
          <li><a href="#" style={{ color: '#4B5563', textDecoration: 'none',margin: '0 20px' }}>Contact</a></li>
        </ul>

        {/* Button */}
        <div>
          <button className='btn' style={btn}>Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
