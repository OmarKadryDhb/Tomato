import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from './../../../src/assets/assets.js';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext.jsx';
export default function Navbar({setShowLogin}) {
    const [menu , setMenu] = useState("home");
  
    const {getTotalCart} = useContext(StoreContext)

    return <>

    <div className='navbar'>
        <Link to='/'>
            <img className='logo' src={assets.logo} alt="" />
        </Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'>
                    <img src={assets.basket_icon} alt="" />
                </Link>
                <div className={getTotalCart()===0?"":"dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
    </>
}
