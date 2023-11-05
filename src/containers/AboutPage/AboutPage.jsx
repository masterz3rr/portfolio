import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './/aboutpage.css'
import { images } from '../../constants'

const AboutPage = ({ theme, setTheme }) => {

  return (
    <div >
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='workspacepage'>
        <h1>About Me</h1>
      </div>

      <div className="page-header" />
      <div className="page-container aboutpage">
        <div className="profile">
          <img src={images.profile} alt="" />

          <h4 className='profileTitle'>Personal Info</h4>
          <div className='profileData'>
            <h5 className='profilename'>Full Name</h5>
            <p>JERRY S. ALE</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Address</h5>
            <p>Bohol, Philippines</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Bachelors Degree</h5>
            <p>Information Technology (BSIT)</p>
            <p className='caption'>Bohol Island State University - Balilihan Campus</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Masters Degree (On-going)</h5>
            <p>Information Technology (MIT)</p>
            <p className='caption'>Cebu Institute of Technology University</p>
          </div>
         

          <h4 className='profileTitle'>I am also Interested doing these following stuffs</h4>
          <div className='profileData'>
            <p>UI/UX Design</p>
            <p>Graphics Design</p>
            <p>React Native Mobile Development</p>
          </div></div>
        <div className="content">
          <h3>A frontend developer specializing in using React JS, Tailwind, and Bootstrap. </h3>
          <p>Since 2018, I have been an educator teaching programming subjects, web and mobile development, UI/UX/UA design and emerging technologies at a premiere state university in the province of Bohol, Philippines.
            In addition to teaching, I am also involved in a number of research projects related to education and technology. I am particularly interested in developing new ways to use technology to improve teaching and learning.
          </p>
          <p>I am designated as the campus Chairperson of the Management Information System Office which handles with the
            development, maintenance, and management of the campus' information systems,
            including the university website, school management system, and more.</p>
          <p>Beyond my teaching career, I am a versatile creative and technical professional with expertise in graphic design, logo and branding creation, internet server networking, and computer troubleshooting.</p>
          <p> I am passionate about designing and developing user-centered websites and mobile applications
            that are both visually appealing and easy to use.
            I am always eager to learn new technologies and techniques,
            and I am excited to see how this field will evolve in the future.</p>

          <h4 className='profileTitle'>My Tech Stack</h4>
          <div className='tech-stack-icons'>
            <img src={images.react} alt="react" />
            <img src={images.laravel} alt="react" />
            <img src={images.javascript} alt="react" />
            <img src={images.wordpress} alt="react" />
            <img src={images.elementor} alt="react" />
            <img src={images.python} alt="react" />
            <img src={images.django} alt="react" />
            <img src={images.bootstrap} alt="react" />
            <img src={images.tailwind} alt="react" />
            <img src={images.mysql} alt="react" />
            <img src={images.mongodb} alt="react" />
            <img src={images.figma} alt="react" />
            <img src={images.photoshop} alt="react" />
            <img src={images.githubWhite} alt="react" />
          </div>


          <h4 className='profileTitle'>My Timeline</h4>
          <div class="timeline">
            <div class="outer">
              <div class="card">
                <div class="info">
                  <h3 class="title">Learning Management System Chairperson<span>(2020 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Management Information Systems Chairperson<span>(2018 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">IT/CS Instructor<span>(2017 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Frontend Web Developer<span>(2016) Thrane Web Development Services</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Web Developer Intern<span>(2015) Bohol Island State University</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Web Developer Intern<span>(2015) Auza.net Software Development and Services</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage