import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo_website.png'
import cart_icon from '../assets/cart_icon.png'
import nav_dropdown from '../assets/nav_dropdown.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("home")}} className="nav-logo">
        <img src={logo} alt="" />
        
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("about-us")}}><Link to='/about-us'>About Us</Link>{menu==="about-us"?<hr/>:<></>}</li> 
        <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        
      </ul>
     
    </div>
  )
}

export default Navbar