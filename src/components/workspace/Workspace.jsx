import React from 'react'
import './workspace.css';
import {images} from '../../constants'

const Workspace = () => {
    return (
        <div className='workspace section'>
            <div className="workspace_image">
                Image
            </div>
            <div className="workspace_content">
                <h1>Welcome to my Workspace</h1>
                <p>Work form home ready workspace where I make all of my project for
                    almost 4 years of my career.</p>

                <div className="workspace_content_specs">
                    <ul className="specs">
                        <li className="specs_item">
                            <img src={images.mobo} alt="motherboard" />
                            <h3>System Unit</h3>
                            <div>
                                <p>Processor: AMD Ryzen 5 Series 4.40 GHz</p>
                                <p>Memory: 18 GB</p>
                                <p>Operating System: Dual Boot (Windows + Linux)</p>
                            </div>

                        </li> 
                        <li className="specs_item">
                            <img src={images.monitor} alt="motherboard" />
                            <h3>Display/Monitor</h3>
                            <div>
                                <p>Dual Monitor Landscape and Portrait</p>
                                <p>4K Monitor Resolution</p>
                            </div>
                        </li> 
                        <li className="specs_item">
                            <img src={images.audio} alt="motherboard" />
                            <h3>Audio Systems</h3>
                            <div>
                                <p>Processor: AMD Ryzen 5 Series 4.40 GHz</p>
                                <p>Memory: 18 GB</p>
                                <p>Operating System: Dual Boot (Windows + Linux)</p>
                            </div>
                        </li> 
                        <li className="specs_item">
                            <img src={images.internet} alt="motherboard" />
                            <h3>Internet</h3>
                            <div>
                                <p>Main: Internet Fiber Plan @100mbps</p>
                                <p>Backup: Broadband Internet @50mbps</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Workspace