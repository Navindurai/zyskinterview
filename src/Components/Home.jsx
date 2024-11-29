import React from 'react';
import './Home.modules.css';
import img from "../assets/Content.jpg"
import profile from "../assets/_Navigation actions.png"
import logo1 from "../assets/Logomark (1).png"
import logo2 from "../assets/Logomark (2).png"

import logo3 from "../assets/Logomark (3).png"
import logo4 from "../assets/Logomark (4).png"

import logo5 from "../assets/Logomark (5).png"
import logo6 from "../assets/Logomark (6).png"
import navlogo from "../assets/Logomark.png"

 import { AiOutlinePlayCircle } from "react-icons/ai";





const Home = () => {
  return (
    <div className="containers">
  
  <header className="navbar">
  <div className="navbar-left">
    <div className="navlogos">
      <img src={navlogo} alt="navlogo" />
      <span>Untitled UI</span>
    </div>


    <button className="hamburger">
      &#9776; 
    </button>

   
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/"><select id='pro'><option>Products</option></select></a>
      <a href="/"><select id='pro'><option>Resources</option></select></a>
      <a href="/">Pricing</a>
    </nav>
  </div>

 
  <div className="navbar-right">
    <img src={profile} alt="Profile" className="profile-img" />
  </div>
</header>



      <main className="main-content">
        <div className="out">
            <div className="new-feature-tag">New feature</div>
            <div className="new-feature">Check out the team dashboard → </div>
       </div>
       
      
        <h1 className="heading">
          Beautiful analytics to grow smarter
        </h1>
        <p className="subtext">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="button-group">
    

<button class="buttonsplay" >
<AiOutlinePlayCircle  size={23} /><span className='un'>Demo</span>
</button>
           <button className="btn-signup">Sign up</button>
        </div>

           <div className="dashboardimage">
           <img src={img} alt="img"
          />
          </div>

<div className='mainlogos'>
        <p className="subtexts">
        Join 4,000+ companies already growing
        </p>

          <div className="logos-container">
      <div className="logo">
        <img src={logo1} alt="BoltShift" />
        <span>BoltShift</span>
      </div>
      <div className="logo">
        <img src={logo2} alt="Lightbox" />
        <span>Lightbox</span>
      </div>
      <div className="logo">
        <img src={logo3} alt="FeatherDev" />
        <span>FeatherDev</span>
      </div>
      <div className="logo">
        <img src={logo4}alt="Spherule" />
        <span>Spherule</span>
      </div>
      <div className="logo">
        <img src={logo5} alt="GlobalBank" />
        <span>GlobalBank</span>
      </div>
      <div className="logo">
        <img src={logo6}alt="Nietzsche" />
        <span>Nietzsche</span>
      </div>
    </div>
    </div>
    

      </main>
    </div>
  );
};

export default Home;