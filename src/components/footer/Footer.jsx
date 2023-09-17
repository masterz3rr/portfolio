import React from 'react'
import { images } from '../../constants'
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer section">
        <h3>Need a FrontEnd/FullStack Web Developer?</h3>
        <h1>Let's talk here!</h1>

        <div>
            <FaEnvelope />
            <FaLinkedinIn/>
        </div>
    </div>
  )
}

export default Footer