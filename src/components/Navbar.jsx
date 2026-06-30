import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#hero' className='logo'>
        IronFit <span>Elite</span>
      </a>
      <ul className='nav-links'>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#programs'>Programs</a></li>
        <li><a href='#trainers'>Trainers</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <a href='#contact' className='join-btn'>Join Now</a>
    </nav>
  )
}

export default Navbar