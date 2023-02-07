import React from 'react'
import {FaHamburger, FaBars, FaTimes} from 'react-icons/fa';
import './NavbarStyles.css'
import {useState} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false) 
    const handleNav = () => setNav(!nav)

    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="container">
        <div><FaHamburger size={40} style={{marginLeft:'4px', color:'white'}} /></div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li>Home</li>
            <li>Order</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
            {nav ? (<FaTimes style={{width:'50px', marginRight:'20px', color:'#ffffff'}} />) :(<FaBars style={{width:'20px', marginRight:'20px',}}/>) }
        </div>
      </div>
    </div>
  )
}

export default Navbar
