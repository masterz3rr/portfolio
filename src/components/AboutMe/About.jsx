import React from 'react'
import { images } from '../../constants'
import './about.css';

const About = () => {
  return (
    <div className="about_section section" id="about">
      <div className="about_image">
        <img src={images.myimage} alt="background" />
        <div className='floater'>
          <img src={images.arrow} alt="arrow-float" />
          <p>Meet Jerry!</p>
        </div>
      </div>
      <div className="about_container">
        <h1>My Profile</h1>
        <p>Hi, I'm Jerry Ale, a FrontEnd Developer from the Bohol, Philippines.
          I've been working in FrontEnd development in both mobile and responsive
          web platforms
          for more than 5 years. </p>
        <p> I am passionate about designing and developing user-centered websites and mobile applications
          that are both visually appealing and easy to use.
          I am always eager to learn new technologies and techniques,
          and I am excited to see how this field will evolve in the future.</p>

        <p>
          Currently learning full stack web development using laravel PHP
          and MERN stack using AXIOS and/or RESTful API for fetching HTTP requests with 
          SQL relational database and Mong  oDB. </p>

        <button>Download my CV</button>
      </div>
    </div>
  )
}

export default About