import React from 'react';
import './Blog.modules.css';
 import image from '../assets/Image (1).png';
 import image2 from '../assets/Image (2).png';
 import image3 from '../assets/Image.png';
 import image4 from '../assets/Avatar.png';
 import image5 from '../assets/Avatar.png';
 import image6 from '../assets/Avatar.png';


const Blog=()=>{
  return (
    <div className="blog">
      <div className="blogcontainer">
        <div className="header">
          <div className="Button">
          <h2 className="title">Our blog</h2>
          <button className="view-all-posts">View all posts</button>
          </div>
          <h1 className="subtitle">Lastest blog posts</h1>
          <p className="description">Tool and strategies modern teams need to help their companies grow.</p>
      
        </div>
        
        <div className="posts">
          <div className="post">
            <img src={image} alt="UX review presentations" className="image"/>

            <div className="post-header">
              <h3 className="post-category">Design</h3>
              <div className='link'>
              <h2 className="post-title">UX review presentations</h2>
             
              </div>
             
            </div>
            <div className="post-content">
              <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            </div>
            <div class
            Name="post-footer">
              <div className="post-author">
                <img src={image4} alt="Olivia Rhye" className="image4"/>
                <div className="post-author-info">
                  <p className="post-author-name">Olivia Rhye</p>
                  <p className="post-author-date">20 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
           
            <img src={image2} alt="Migrating to Linear 101" className="image2"/>
            <div className="post-header">
              <h3 className="post-category">Product</h3>
              <div className='link'>
              <h2 className="post-title">Migrating to Linear 101</h2>
              
              </div>
          
            </div>
            <div className="post-content">
              <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
            </div>
            <div className="post-footer">
              <div className="post-author">
                <img src={image5} alt="Phoenix Baker" className="image5"/>
                <div className="post-author-info">
                  <p className="post-author-name">Phoenix Baker</p>
                  <p className="post-author-date">19 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
         
            <img src={image3} alt="Building your API stack" className="image3"/>
            <div className="post-header">
              <h3 className="post-category">Software Engineering</h3>
              <div className='link'>
              <h2 className="post-title">Building your API stack</h2>
            
              </div>
            </div>
            <div className="post-content">
              <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            </div>
            <div className="post-footer">
              <div className="post-author">
                <img src={image6} alt="Lana Steiner" className="image6"/>
                <div className="post-author-info">
                  <p className="post-author-name">Lana Steiner</p>
                  <p className="post-author-date">18 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="freecontainer">
      <div className="content">
        <h1>Start your free trial</h1>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className='mainbuttons'>
        <div className="buttons">
          {/* <button className="button">Learn more</button> */}
          <button className="btn">Learn more</button>
        </div>
        <div className="startbutton">
          <button className="btn">Get started</button>
        </div>
        </div>
      </div>
    
    </div>


      </div>
    </div>
  );
}

export default Blog;