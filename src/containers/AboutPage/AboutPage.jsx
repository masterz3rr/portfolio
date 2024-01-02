import React from 'react'
import './/aboutpage.css'
import { images } from '../../constants'

const AboutPage = ({ theme, setTheme }) => {

  return (
    <div >
      
      <div className="container-fluid relative md:h-[400px] overflow-hidden">
        <img src={images.herobg} alt="" className='md:mt-[-100px]'/>
        <h1 className='headTag absolute bottom-0 ml-4 md:ml-48'>About Me</h1>
      </div>

      
      <div className="container block md:flex mx-auto px-4 md:px-0">
        
        <div className="w-full text-center md:text-left md:w-1/5 mr-16">
          <img src={images.profile} alt="" />

          <h4 className='profileTitle'>Personal Info</h4>
          <div className='profileData'>
            <h5 className='profilename'>Full Name</h5>
            <p className='interFont'>JERRY S. ALE</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Address</h5>
            <p className='interFont'>Bohol, Philippines</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Bachelors Degree</h5>
            <p className='interFont'>Information Technology (BSIT)</p>
            <p className='caption'>Bohol Island State University - Balilihan Campus</p>
          </div>
          <div className='profileData'>
            <h5 className='profilename'>Masters Degree (On-going)</h5>
            <p className='interFont'>Information Technology (MIT)</p>
            <p className='caption'>Cebu Institute of Technology University</p>
          </div>
         

          <h4 className='profileTitle'>I am also Interested doing these following stuffs</h4>
          <div className='profileData'>
            <p>UI/UX Design</p>
            <p>Graphics Design</p>
            <p>React Native Mobile Development</p>
          </div>
        </div>



        <div className="w-full text-center md:text-left  md:w-4/5 interFont mt-8">
          <h3 className='text-lg font-extrabold'>A frontend developer specializing in using React JS, Tailwind, and Bootstrap. </h3>
          <br />
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

          <h4 className='profileTitle'>My Tech Stack</h4><br/>
          <div className='grid d-grid grid-cols-3 md:grid-cols-8 gap-4 tech-stack-icons justify-items-center md:justify-items-start'>
            <div className="tooltip">
              <a href="https://react.dev/" target='_black' rel='noreferrer'>
                <img src={images.react} alt="react" /></a>
                </div>
            <div className="tooltip">
              <a href="https://laravel.com/" target='_black' rel='noreferrer'>
                <img src={images.laravel} alt="Laravel"/></a>
            </div>

            <div className="tooltip">
              <a href="https://www.javascript.com/" target='_black' rel='noreferrer'>
                <img src={images.javascript} alt="javascript"/></a>
            </div>
            <div className="tooltip">
              <a href="https://laravel.com/" target='_black' rel='noreferrer'>
                <img src={images.python} alt="Laravel"/></a>
            </div>
            <div className="tooltip">
              <a href="https://laravel.com/" target='_black' rel='noreferrer'>
                <img src={images.django} alt="Laravel"/></a>
            </div>
            <div className="tooltip">
              <a href="https://wordpress.org/" target='_black' rel='noreferrer'>
                <img src={images.wordpress} alt="wordpress"/></a>
            </div>
            <div className="tooltip">
              <a href="https://elementor.com/" target='_black' rel='noreferrer'>
                <img src={images.elementor} alt="elementor"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.shopify.com/" target='_black' rel='noreferrer'>
                <img src={images.shopify} alt="shopify"/></a>
            </div>
            <div className="tooltip">
              <a href="https://getbootstrap.com/" target='_black' rel='noreferrer'>
                <img src={images.bootstrap} alt="bootstrap"/></a>
            </div>
            <div className="tooltip">
              <a href="https://tailwindcss.com/" target='_black' rel='noreferrer'>
                <img src={images.tailwind} alt="tailwind"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.mysql.com/" target='_black' rel='noreferrer'>
                <img src={images.mysql} alt="mysql"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.mongodb.com/" target='_black' rel='noreferrer'>
                <img src={images.mongodb} alt="mongodb"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.figma.com/" target='_black' rel='noreferrer'>
                <img src={images.figma} alt="figma"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.adobe.com/" target='_black' rel='noreferrer'>
                <img src={images.photoshop} alt="photoshop"/></a>
            </div>
            <div className="tooltip">
              <a href="https://www.adobe.com/" target='_black' rel='noreferrer'>
                <img src={images.illustrator} alt="illustrator"/></a>
            </div>
            <div className="tooltip">
              <a href="https://github.com/masterz3rr" target='_black' rel='noreferrer'>
                <img src={images.githubWhite} alt="githubWhite"/></a>
            </div>
            <div className="tooltip">
              <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target='_black' rel='noreferrer'>
                <img src={images.net} alt="net"/></a>
            </div>
          </div>


          <h4 className='profileTitle'>My Timeline</h4>
          <div className="timeline">
            <div className="outer">
              
              <div className="card">
                <div className="info">
                  <h3 className="title">Learning Management System Chairperson<span>(2020 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>In response to the pandemic that emerged in the early 2020s, traditional education 
                    systems and teaching methodologies were forced to rapidly evolve to maintain quality 
                    education. Blended learning became essential, and universities maximized the use of 
                    learning management systems. </p>
                    <p>I successfully planned, developed, and managed the learning management system for 
                      our campus and university, achieving 100% utilization across all classes.</p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">Management Information Systems Chairperson<span>(2018 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">IT/CS Instructor<span>(2017 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">Frontend Web Developer<span>(2016) Thrane Web Development Services</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">Bachelors Degree in Information Technology<span>(2016) Bohol Island State University</span></h3>
                  <p>Earned my degree </p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">Web Developer Intern<span>(2015) Auza.net Software Development and Services</span></h3>
                  <p>My internship as part of the BSIT curriculum has given me a glimpse 
                    into the real-world of web development, preparing me for my future career as a 
                    web developer. I gained valuable hands-on experience in using real-world frameworks 
                    like WordPress and server side programming language PHP to develop dynamic websites.
                     Some of the projects we worked includes government websites, e-commerce websites, and booking websites.</p>
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