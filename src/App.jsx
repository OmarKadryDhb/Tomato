import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.jsx';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer.jsx';
import Login from './Components/Login/Login.jsx';

export default function App() {

  const [showLogin , setShowLogin] = useState(false)
  return <>
      {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        
      </Routes>
      </div>
      <Footer/>
  </>
}
