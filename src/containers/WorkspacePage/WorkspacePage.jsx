import React from 'react'
import './workspacepage.css'
import Navbar from '../../components/Navbar/Navbar'
import { images } from '../../constants'

const WorkspacePage = ({ theme, setTheme }) => {

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className='workspacepage'>
        <h1>My Workspace</h1>
      </div>
      <div className="page-header" />
      <div className="page-container">

        <h3 className='tagline'>Here is my sanctuary,
          a realm where I focus on my work, ignite my creativity,
          and bring my ideas to life.</h3>
        <div className="gallery">
          <img src={images.pcsetA} alt="mypc" />
          <img src={images.pcsetB} alt="mypc" />
        </div>


        <div className="content-header">
          <h4>Computer Specifications</h4>
          <div className="specs-container">
            <div className="specs_item specs_item1">
              <img src={images.mobo} alt="motherboard" />
              <div className="details">
                <h3>System Unit</h3>
                <p>High-performance programming workstation with
                  AMD Ryzen 5 Series 4.40 GHz processor,
                  18 GB of memory, and dual-boot Windows and
                  Linux operating systems.</p>
              </div>
            </div>
            <div className="specs_item specs_item2">
              <img src={images.monitor} alt="motherboard" />
              <div className="details">
                <h3>Display/Monitor</h3>
                <p>Dual monitor setup with one landscape and one portrait 4K monitor ideal for responsive and mobile-first web development.</p>
              </div>
            </div>
            <div className="specs_item specs_item3">
              <img src={images.audio} alt="motherboard" />
              <div className="details">
                <h3>System Unit</h3>
                <p>High-performance programming workstation with
                  AMD Ryzen 5 Series 4.40 GHz processor,
                  18 GB of memory, and dual-boot Windows and
                  Linux operating systems.</p>
              </div>
            </div>
            <div className="specs_item specs_item3">
              <img src={images.internet} alt="motherboard" />
              <div className="details">
                <h3>Internet Connection</h3>
                <p>Dual internet connection setup with 100 Mbps fiberoptic primary connection and 50 Mbps broadband backup connection.</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default WorkspacePage