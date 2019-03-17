import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <nav className='navbar'>
      <div className='nav navbar-logo'>
        Start BootStrap
      </div>
      <ul className='nav nav-items nav-right'>
        <li className='navbar-item'><a href="#" className="navbar-link">Services</a></li>
        <li className='navbar-item'><a href="#" className="navbar-link">Portfolio</a></li>
        <li className='navbar-item'><a href="#" className="navbar-link">About</a></li>
        <li className='navbar-item'><a href="#" className="navbar-link">Team</a></li>
        <li className='navbar-item'><a href="#" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  )
}
