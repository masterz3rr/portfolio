import React from 'react'
import './workspace.css';
import {images} from '../../constants'
import { ThemeContext } from '../../App';

const Workspace = ({theme,aosup}) => {
    return (        
        <ThemeContext.Provider value={{theme}}>
        <div className='workspace'>
            <div className="workspace_image workspace_imghover">
                <img src={images.pcsetA} alt="html" />
            </div>
            <div data-aos={aosup} className="workspace_content">
                <h1>My Workspace</h1>
                <p>Work form home ready workspace where I make all of my project for
                    almost 4 years of my career.</p>

                <button className='primary_btn' >See computer specifications</button>
             
               

            </div>
        </div>
        
    </ThemeContext.Provider>
    )
}

export default Workspace