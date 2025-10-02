import React from 'react'
import './styles.css'
import '@fontsource/roboto/300.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>CAR Gallery</div>

      <ul className="nav-links">
        <li> <Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>
    </nav>
  )
}

export default Navbar
