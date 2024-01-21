import React from 'react'
import './/aboutpage.css'
import { images } from '../../constants'
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const AboutPage = ({ theme, setTheme }) => {
  const email = 'alejerry24@gmail.com';

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
         

          <h4 className='profileTitle'>Contact Me</h4>
          <div className='pt-4 flex justify-start text-slate-50 contact-icon'>
            <a href={`mailto:${email}`}><FaEnvelope className='w-4 mr-4'/></a>
            <a href="https://www.linkedin.com/in/jerryale/" rel="noreferrer" target="_blank"><FaLinkedin className='w-4' /></a>
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
              <div className="cards">
                <div className="info">
                  <h3 className="titles">Learning Management System Chairperson <br /><span>(2020 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p className='mt-4'>In response to the pandemic that emerged in the early 2020s, traditional education 
                    systems and teaching methodologies were forced to rapidly evolve to maintain quality 
                    education. Blended learning became essential, and universities maximized the use of 
                    local and cloud-based learning management systems. </p>
                    <p className='mt-4'>I successfully planned, developed, and managed the learning management system for 
                      our campus and university, achieving 100% utilization across all classes by the second semester of Academic year 2020 up to this date.</p>
                </div>
              </div>
              <div className="cards">
                <div className="info">
                  <h3 className="titles">Management Information Systems Officer<br /><span>(2018 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p className='mt-6'>In my 2<sup>nd</sup> year in the institution, i am designated as the MIS officer in which duties and responsibilities is to: </p>
                 
                  <ul className='list-disc ml-6 mt-2'>
                    <li className='mb-2'>Design, develop and maintain the unversity's offical website and other web portals</li>
                    <li className='mb-2'>Design and analyze information systems that fit the universit's technical requirements and oversee the maintenance of such systems</li>
                    <li className='mb-2'>Provide technical knowledge in identifying an appropriate budget, and technical specifications for software and hardware systems</li>
                    <li className='mb-2'>Identify, assess and mitigate risks related to data security and privacy in compliacne with standards and National Privacy Commission requirements</li>
                    <li className='mb-2'>Manage and maintain university databases and perform regular backup of all data</li>
                    <li className='mb-2'>Generate data and reforms existing databases as required by different governing bodies</li>
                    <li className='mb-2'>Provide technical support in solving IT related issues</li>
                    <li className='mb-2'>Manage and supervise personnel who are involved in the implementation and maintenance of new hardware and software systems</li>
                  </ul>
                  <p className='mt-4'>
                    The following systems i have handled in my years of office: </p>
                    <ul className='list-disc ml-6 mt-2'>
                      <li className='mb-2'><b>
                      University and Campus Website:
                        </b>
                         Transparency website of the campus that shows its activities, events, accomplishments,  and other information about the campus.
                        </li>
                        <li className='mb-2'>
                          <b>Integrated School Management Information System:</b> Handles online admission and registration, enrollment and advising of the students, as well as grading, cashiering, and curriculum management of the campus.
                        </li>
                        <li className='mb-2'>
                          <b>ICT Website:</b>
                           Demonstrates the office's capabilities and oversees stakeholder ICT needs, ensuring efficient tracking and execution..
                        </li>
                        <li className='mb-2'>
                          <b>Local and Cloud-based Learning Management System:</b>
                           In the face of unprecedented disruption, this web app empowered the university to not just survive, but thrive during the pandemic. It revolutionized online learning, connecting students and educators, igniting the flame of knowledge even amid a world on pause.
                        </li>
                        <li className='mb-2'>
                          <b>Internet Server:</b> Managed internet distribution across multiple devices, offices and users in the campus using ubiquity network solutions applied with access controls and user roles.
                        </li>
                        <li className='mb-2'>
                          <b>File Server:</b> Manage the network to centralize file storage in one area across computer laboratories and devices on campus.
                        </li>
                        <li className='mb-2 font-bold'>
                          Other software applications in the campus.
                        </li>
                    </ul>
                  
                  
                </div>
              </div>
              <div className="cards">
                <div className="info">
                  <h3 className="titles">IT/CS Instructor<br /><span>(2017 - Present) Bohol Island State University Balilihan Campus</span></h3>
                  <p className='mt-4'>
                    Teaching college students with IT and Computer Science subjects such as the following:
                  </p>
                    <ul className='list-disc ml-6 mt-2'>
                      <li className='mb-2'>
                          Object-Oriented Programming (Java)  
                      </li>
                        <li className='mb-2'>
                          Web Development/Web Enterprise
                        </li>
                        <li className='mb-2'>
                          Mobile Application using Google Android Platform (Java/React Native) 
                        </li>
                        <li className='mb-2'>
                          Application Development and Emerging Technologies (Software Engineering)</li>
                        <li className='mb-2'>
                          Data Structures and Algorithms 
                        </li>
                        <li className='mb-2'>
                          Web Information Systems and Technologies  
                        </li>
                        <li className='mb-2'>
                          Database Management System
                        </li>
                        <li className='mb-2'>
                          Programming Languages (PHP)
                        </li>
                    </ul>
                </div>
              </div>
              <div className="cards">
                <div className="info">
                  <h3 className="titles">Frontend Web Developer<br /><span>(2016) Thrane Web Development Services</span></h3>
                  <p  className='mt-4'>
                    A software development company from Denmark that offers services such as Web Development, Animation, SEO and Social Media advertising. 
                    Started right after my graduation as a Junior Web Developer/Designer. I was assigned to design websites from wireframes to prototype using Adobe XD and Adobe Photoshop in wireframing and prototyping and then switched to Figma for more robust frontend designing.
                  
                    As to the development, I am using either Wordpress or WAMP(PHP + MySQL) stack web development depending on the system requirements.
                  </p>
                </div>
              </div>
              <div className="cards">
                <div className="info">
                  <h3 className="titles">Bachelors Degree in Information Technology<br /><span>(2016) Bohol Island State University</span></h3>
                  <p className='mt-4'>Earned my Bachelors Degree and received a certificate of being one of the 2 proficient student in Information Technology with my capstone project entitled "Automated Attendance Monitoring System using Barcode technology" which is an embedded system developed using .Net (C# Programming Language) and MySQL database system. The project purpose is to centralize the recording of attendance  where it will benefit the secured monitoring of campus personnel to what time they enter and leave the campus and also class attendance that records student and teacher's log in every classes. </p>
                </div>
              </div>
              <div className="cards">
                <div className="info">
                  <h3 className="titles">Web Developer Intern<br /><span>(2015) Auza.net Software Development and Services</span></h3>
                  <p className='mt-4'>My internship as part of the BSIT curriculum has given me a glimpse 
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