import React from 'react'
import Repositories from '../../components/Repositories/Repositories'
import Navbar from '../../components/Navbar/Navbar'

const Projects = ({ theme, setTheme }) => {

  return (
    <div >
      <Navbar theme={theme} setTheme={setTheme} />
      <Repositories aosright="fade-right" aosleft="fade-left" />
    </div>
  )
}

export default Projects