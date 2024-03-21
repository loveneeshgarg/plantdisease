import React from 'react'
import './Navbar.css'
import logo from '../../assets/try.jpg'
const Navbar = () => {
  return (
    <nav className='container'>
      {/* <img src={logo} alt="" className='logoo'/> */}
      <ul>
        <li>PLANTCARE</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Plants</li>
        <li>Common Diseases</li>
        <li>Disease Prevention</li>
        <li><button className='btn'>Contact us</button></li>

      </ul>
      
    </nav>
  )
}

export default Navbar


