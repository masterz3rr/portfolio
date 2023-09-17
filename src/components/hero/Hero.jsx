import React from 'react'
import './hero.css';
import {images} from '../../constants'

const Hero = () => {
    return (
        <div className='hero'> 
            <img src={images.herobg} alt="background" className='hero-bg'/>
            <main className="container">
                <p>Hello I AM</p>
                <section className="animation">
                    <div className="first"><div>Jerry Ale</div></div>
                    <div className="second"><div>A FRONTEND DEVELOPER</div></div>
                    <div className="third"><div>A WEB DEVELOPER</div></div>
                </section>

                <a href="#about">
                    <div id="mouse-scroll">
                        <div className="mouse">
                            <div className="mouse-in"></div>
                        </div>
                        <div>
                            <span className="down-arrow-1"></span>
                            <span className="down-arrow-2"></span>
                            <span className="down-arrow-3"></span>
                        </div>
                    </div>
                </a>
            </main>
        </div>
    )
}

export default Hero