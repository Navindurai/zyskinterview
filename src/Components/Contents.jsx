import React from 'react';
import './Contents.modules.css';
import img1 from "../assets/chart-breakout-square (1).png";
import img2 from "../assets/command.png";
import img3 from "../assets/message-chat-circle.png";
import img4 from "../assets/zap.png";
import img5 from "../assets/message-heart-circle.png";
import img6 from "../assets/message-smile-circle.png"


const Contents= () => {
  return (
    <div className="features-container">
      <div className="features-header">
        <h2>Analytics that feels like it's from the future</h2>
        <p className="subtext">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature">
          <div className="feature-icon">
           <img src={img1} alt="image1" />
          </div>
          <h3>Share team inboxes</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes
            keep everyone on the same page and in the loop.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
          <img src={img2} alt="image2" />
          </div>
          <h3>Deliver instant answers</h3>
          <p>
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
          <img src={img3} alt="image3"/>
          </div>
          <h3>Manage your team with reports</h3>
          <p>
            Measure what matters with Untitled's easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
          <img src={img4} alt="image4"/>
          </div>
          <h3>Connect with customers</h3>
          <p>
            Solve a problem or close a sale in real-time with chat. If no one
            is available, customers are seamlessly routed to email without
            confusion.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
          <img src={img5} alt="image5"/>
          </div>
          <h3>Connect the tools you already use</h3>
          <p>
            Explore 100+ integrations that make your day-to-day workflow
            more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
          <img src={img6} alt="img6"/>
          </div>
          <h3>Our people make the difference</h3>
          <p>
            We're an extension of your customer service team, and all of our
            resources are free. Chat to our friendly team 24/7 when you need
            help.
          </p>

        </div>
      </div>
    </div>



  );
}

export default Contents;