import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className="footer" id="footer">
         <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>Tomato is a global food and beverage company that focuses on nutrition, health, and wellness. It operates in more than 190 countries, offering a wide range of products, from dairy and cereals to bottled water and snacks. </p>
             <div className="footer-content-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets. linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
             </div>
            </div>
            <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-213-412-123</li>
                <li>contact@tomato.com</li>
            </ul>

            </div>
         </div>
         <hr/>
         <p className="footer-copyright">Copyright 2025 © Tomato.com - All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
