import React, { useState } from 'react';
import './FAQ.modules.css';
 import avtargroup from "../assets/Avatar group.png"


const FAQ=()=>{
  const [isExpanded, setIsExpanded] = useState({});

  const toggleAccordion = (index) => {
    setIsExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const questions = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can change your plan at any time.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add other information to your invoice.',
    },
    {
      question: 'How does billing work?',
      answer: 'You will be billed monthly.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email by going to your profile settings.',
    },
  ];

  return (
    <div className="faq-container">
       <h2 className="heading">
       Frequently asked questions
        </h2>
        <p className="subtext">
        Everything you need to know about the product and billing.
        </p>
      {/* <h2>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p> */}
      <ul className="faq-list">
        {questions.map((question, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {question.question}
              {isExpanded[index] ? (
                <span className="plus-icon">-</span>
              ) : (
                <span className="minus-icon">+</span>
              )}
            </button>
            {isExpanded[index] && (
              <div className="faq-answer">{question.answer}</div>
            )}
          </li>
        ))}
      </ul>
      <div className="questioncontainer">
      <div className="content">
      <div className="images">
        <img src={avtargroup} alt="avtargroup" />
       
      </div>
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="button">Get in touch</button>
      </div>
     
    </div>

    </div>
  );
}

export default FAQ;
