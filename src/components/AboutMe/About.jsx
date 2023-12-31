import React from 'react'
import { images } from '../../constants'
import './about.css';
import { ThemeContext } from '../../App';

const About = ({ theme, aosright, aosleft }) => {
  return (

    <ThemeContext.Provider value={{ theme }}>
      <div className='container block md:flex mx-auto px-4 py-32 overflow-hidden' id="about">
          <div className="flex justify-center mb-12 md:w-1/3 " data-aos={aosright}>
            <img src={images.myimage} alt="background" className='myImageAbout'/>
            <div className='floater'>
              <img src={images.arrow} alt="arrow-float" />
              <p>Meet Jerry!</p>
            </div>
          </div>
          <div className="md:w-2/3 items-center justify-center text-center md:text-left mx-4 md:ml-8" data-aos={aosleft}>
            <div className="">
              <h1 className='headTag mt-24'>My Profile</h1>
              <p className='interFont'>Hi, I'm Jerry Ale, a FrontEnd Developer from Bohol, Philippines.
                I've been working in FrontEnd development in both mobile and responsive
                web platforms
                for more than 5 years. </p>
                <p className='interFont mt-6'>
                Motivated by my deep interest in web development and my desire to leverage my current skills, I seek a position that will allow me to build web applications that are both innovative and user-centric. I am eager to learn new technologies and frameworks, and to use my unique skills and perspectives to create web experiences that are both visually appealing and intuitive.
                  </p>
                {/** 
              <p> I am passionate about designing and developing user-centered websites and mobile applications
                that are both visually appealing and easy to use.
                I am always eager to learn new technologies and techniques,
                and I am excited to see how this field will evolve in the future.</p>

              <p>
                Currently learning full stack web development using laravel PHP
                and MERN stack using AXIOS and/or RESTful API for fetching HTTP requests with
                SQL relational database and Mongo DB. </p>
            */}
              <button className='primary_btn' >More about me</button>
            </div>
          </div>
        </div>
    </ThemeContext.Provider>
  )
}

export default About