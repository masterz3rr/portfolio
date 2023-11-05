import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/Hero'
import About from '../../components/AboutMe/About'
import Repositories from '../../components/Repositories/Repositories'
import Workspace from '../../components/workspace/Workspace'

const HomePage = ({ theme, setTheme }) => {

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <About aosright="fade-right" aosleft="fade-left" />
            <Repositories aosright="fade-right" aosleft="fade-left" />
            <Workspace aosup="fade-up" />
        </div>
    )
}

export default HomePage