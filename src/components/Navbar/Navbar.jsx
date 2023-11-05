import React from 'react'
import { images } from '../../constants'
import { Link} from 'react-router-dom'
import './navbar.css'
import '../../index.css'

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
      <div className="navbar">
        <div className='navTitle'>
          
            <Link to={"/"}><img src={images.logo} alt="" width={"50px"}/><span>Jerry Ale</span></Link> 
          
        </div>
        <div className='links'>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/workspace">Workspace</Link></li>
            <li onClick={
              () => {
                toggleTheme()
              }
            }>
              {
                theme === "light" ? (

                  <img src={images.light} alt="html" />
                ) : (
                  <img src={images.dark} alt="html" />
                )
              }
            </li>
          </ul>
        </div>
      </div>
      
  )
}

export default Navbar