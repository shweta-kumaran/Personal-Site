import React from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh'
    }}>
      <img 
        src={logo}
        alt="Logo"
        style={{
          position: 'fixed',
          left: '-50px',
          top: '-20px',
          width: '300px',
          height: '300px'
        }}
      />
    </div>
  );
}

export default Navbar;

