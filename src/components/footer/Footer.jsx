import React from 'react'
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import './footer.css'
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className="footer section text-center">
        <div className="footer-logo">
          <img src={images.logo} alt="mylogo" width={"100px"}/>
        </div>
        <h3>Need a FrontEnd/FullStack Web Developer?</h3>
        <h1>Let's talk here!</h1>

        <div className='flex mt-6'>
            <FaEnvelope />
            <FaLinkedinIn/>
        </div>
    </div>
  )
}

export default Footer