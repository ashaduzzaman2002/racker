import React from 'react'
import '../styles/Navbar.css';
import Brand from '../assets/images/OnlyLogo@2x.svg';
import Menu from '../assets/images/menu.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='brand'>
            <img src={Brand} alt="" />
            <p>Racker.</p>
        </div>

        <div className='menu-bar'>
          <img src={Menu} alt="" />
        </div>
    </div>
  )
}

export default Navbar