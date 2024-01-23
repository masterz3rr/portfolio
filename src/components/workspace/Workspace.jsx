import React from 'react'
import './workspace.css';
import {images} from '../../constants'
import { ThemeContext } from '../../App';

const Workspace = ({theme, aosup}) => {
    return (        
        <ThemeContext.Provider value={{theme}}>
        <div className='container-fluid h-[700px] block md:flex mx-0 pb-32'>
            <div className="w-full md:w-1/2 text-center overflow-hidden">
                <img src={images.pcsetA} alt="html" className='transition ease-in-out hover:scale-125 '/>
            </div>
            <div data-aos={aosup} className="flex w-full md:pr-44 md:w-1/2 text-center md:text-left px-4 justify-center align-middle ">
                <div className="flex items-center justify-center align-middle">
                    <div className="block">
                        <h1 className='headTag'>My Workspace</h1>
                        <p className='interFont'>Work form home ready workspace where I make all of my project for
                            almost 4 years of my career.</p>

                        <button className='primary_btn' >See computer specifications</button>
                    </div>
                   
                </div>
            </div>
        </div>
        
    </ThemeContext.Provider>
    )
}

export default Workspace