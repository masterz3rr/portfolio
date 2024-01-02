import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/AboutMe/About'
import Repositories from '../../components/Repositories/Repositories'
import Workspace from '../../components/workspace/Workspace'

const HomePage = ({ theme, setTheme }) => {

    return (
        <>            
            <Hero />
            <About aosright="fade-right" aosleft="fade-left" />
            <Repositories aosright="fade-right" aosleft="fade-left" />
            <Workspace aosup="fade-up" />
        </>
    )
}

export default HomePage