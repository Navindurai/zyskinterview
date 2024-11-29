import React from 'react';
import './Footer.modules.css';
import footerlogo from "../assets/Logomark.png" 

const Footer=()=>{
  return (
    <div className="footercontainer">
      <div className="headers">
        <div className="column">
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions <span className="new">New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="column">
          <h3>Use cases</h3>
          <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div className="column">
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="column">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='line'></div>
      <div className="footer">
        <div className="logos">
          <img src={footerlogo} alt="footerlogo" />
          <span>Untitled UI</span>
        </div>
        <div className="copyright">
          © 2077 Untitled UI. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
