import React from 'react'
import './workspacepage.css'
import { images } from '../../constants'

const WorkspacePage = ({ theme, setTheme }) => {

  return (
    <div>

      <div className='container-fluid relative md:h-[400px] overflow-hidden'>
        <img src={images.herobg} alt="" className='md:mt-[-100px]'/>
        <h1 className='headTag absolute bottom-0 ml-4 md:ml-48'>My Workspace</h1>
     
      </div>
      <div className="container mx-auto px-4 md:px-0">

        <h3 className='interFont text-xl md:text-2xl my-14 text-center'>Here is my sanctuary,
          a realm where I focus on my work, ignite my creativity,
          and bring my ideas to life.</h3>
        <div className="container-fluid p-0  block md:flex gallery">
          <img src={images.pcsetA} alt="mypc" />
          <img src={images.pcsetB} alt="mypc" />
        </div>


        <div className="content-header pt-4">
          <h4>Computer Specifications</h4>
          <div className="grid d-grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:justify-items-start py-4">
            <div className="bg-white p-4 block md:flex text-center  md:text-left justify-center">
              <div  className=' w-full'>
                <img src={images.mobo} alt="motherboard"  className='workimg'/>
              </div>
              
              <div className="details">
                <h3 className='mt-4 text-lg font-bold'>System Unit</h3>
                <p className='font-normal'>High-performance programming workstation with
                  AMD Ryzen 5 Series 4.40 GHz processor,
                  18 GB of memory, and dual-boot Windows and
                  Linux operating systems.</p>
              </div>
            </div>
            <div className="bg-white p-4 block md:flex text-center  md:text-left justify-center">
            <div  className=' w-full'>
            <img src={images.monitor} alt="motherboard"  className='workimg'/>
              </div>
              <div className="details">
                <h3 className='mt-4 text-lg font-bold'>Display/Monitor</h3>
                <p>Dual monitor setup with one landscape and one portrait 4K monitor ideal for responsive and mobile-first web development.</p>
              </div>
            </div>
            <div className="bg-white p-4 block md:flex  md:text-left  text-center justify-center">
            <div className=' w-full'>
              <img src={images.audio} alt="motherboard" className='workimg'/>
                </div>
              <div className="details">
                <h3 className='mt-4 text-lg font-bold'>System Unit</h3>
                <p>High-performance programming workstation with
                  AMD Ryzen 5 Series 4.40 GHz processor,
                  18 GB of memory, and dual-boot Windows and
                  Linux operating systems.</p>
              </div>
            </div>
            <div className="bg-white block md:flex p-4 text-center md:text-left justify-center">
                <div className=' w-full'>
                  <img src={images.internet} alt="motherboard" className='workimg'/>
                 </div>
                <div className="details">
                <h3 className='mt-4 text-lg font-bold'>Internet Connection</h3>
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