import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
export default function Footer() {
  return <>
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+0-123-456-789</li>
                    <li>tomato@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copy-right">Developed with love by OmarDahab © 2024</p>
    </div>
  
  </>
  
}
