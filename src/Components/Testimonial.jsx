import React from 'react';
import './Testimonial.modules.css';
import Sisyphuslogo from "../assets/Fictional company logo.png"
import CandiceWu from "../assets/_Navigation actions.png"

const Testimonial =()=>{
  return (
    <div className="container">
      <div className="testmoniallogo">
        <img src={Sisyphuslogo} alt="Sisyphus logo" />
      </div>
      <p className="testimonial">
      We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
      <div className="author">
        <img src={CandiceWu} alt="Candice Wu" className="author-image" />
        <div className="author-info">
          <h3>Candice Wu</h3>
          <p>Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;