import React from 'react';
import './Footer.css'
import footer_logo from '../Assets/logo_big.png';
import img_instagram from '../Assets/instagram_icon.png';
import img_pintester from '../Assets/pintester_icon.png';
import img_whatsapp from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>BNE-commerce</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li>company</li>
                    <li>products</li>
                    <li>offers</li>
                    <li>About </li>
                    <li>contact </li>
                </ul>
            </div>
            <div className="footer-social">
                <div className="footer-icon-containar">
                    <img src={img_instagram} alt="" />
                </div>
                <div className="footer-icon-containar">
                    <img src={img_pintester} alt="" />
                </div>
                <div className="footer-icon-containar">
                    <img src={img_whatsapp} alt="" />
                </div>

            </div>
            <div className="footer-copyright">
                <hr />
                <h3>  Copy Right @ 2024-All Reseverd</h3>
            </div>
 
    </div>
  );
};

export default Footer;