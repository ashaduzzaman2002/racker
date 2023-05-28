import React, { useState } from 'react'
import '../styles/Navbar.css';
import Brand from '../assets/images/OnlyLogo@2x.svg';
import Menu from '../assets/images/menu.svg'
import { Link } from 'react-router-dom';
import Close from '../assets/images/circle-xmark-solid.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const {pathname} = window.location

  return (
    <div className='navbar'>
        <Link to={'/'} className='brand'>
            <img src={Brand} alt="" />
            <p>Racker.</p>
        </Link>

        <div onClick={() => setToggle(!toggle)} className='menu-bar'>
          <img src={Menu} alt="" />
        </div>

        <div className={`nav-links ${!toggle? 'toggleNav': ''}`}>
          <img onClick={() => setToggle(false)} className='close' src={Close} alt="" />
          <ul>
            <li onClick={() => setToggle(false)} className={`nav-link ${pathname === '/'?'active-link':''}`} ><Link to={'/'}>Home</Link></li>
            <li onClick={() => setToggle(false)} className={`nav-link ${pathname === '/new-session'?'active-link':''}`} ><Link to={'/new-session'}>New Session</Link></li>
            <li onClick={() => setToggle(false)} className={`nav-link ${pathname === '/add-hand'?'active-link':''}`} ><Link to={'/add-hand'}>Add Hand</Link></li>
            <li onClick={() => setToggle(false)} className={`nav-link ${pathname === '/login'?'active-link':''}`} ><Link to={'/login'}>Login</Link></li>
            <div className='hr80' />
          </ul>
        </div>
    </div>
  )
}

export default Navbar