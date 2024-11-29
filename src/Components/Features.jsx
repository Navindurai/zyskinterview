import React from 'react';
import './Features.modules.css';
import image2 from '../assets/iPhone 12 Pro mockup.png';
import image1 from '../assets/3_2 screen mockup.png';
import inbox from '../assets/message-chat-circle.png';
import Bolt from '../assets/Icon.png';
import Reports from '../assets/chart-breakout-square.png';




const Features=()=>{
  return (
    <div className="app-container">
      <div className="features-header">
        <h2>Analytics that feels like it's from the future</h2>
        <p className="subtext">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="container">
      <div className="image-container">
        <div className='image1'>
        <img src={image2} alt="Img" className="image" />
        </div>
      <div className='image2'>
      <img src={image1} alt="Img" className="image" />
      </div>
     
      </div>
      </div>


      <div className="containerone">
      <div className="card">
        <div className="card-header">
          <img src={inbox} alt="Inbox" />
        </div>
        <div className="card-body">
          <h3>Share team inboxes</h3>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          <a href="#" className="learn-more">Learn more →</a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={Bolt} alt="Bolt" />
        </div>
        <div className="card-body">
          <h3>Deliver instant answers</h3>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          <a href="#" className="learn-more">Learn more →</a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={Reports} alt="Reports" />
        </div>
        <div className="card-body">
          <h3>Manage your team with reports</h3>
          <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          <a href="#" className="learn-more">Learn more →</a>
        </div>
      </div>
    </div>
      </div>
   
      );
      }
      export default Features;
      