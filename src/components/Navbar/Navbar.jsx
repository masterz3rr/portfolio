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
      <>
       <nav class="navbar navbar-light">
        <Link className="logo" to={"/"}><img src={images.logo} alt="" width={"50px"}/><span>Jerry Ale</span></Link> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse links" id="navbarSupportedContent">
          <ul class="nav-links">
            <Link class="nav-link" to="/about">About<li class="nav-item active"></li></Link>
            <Link class="nav-link" to="/projects"><li class="nav-item">Projects</li></Link>
            <Link class="nav-link" to="/workspace"><li class="nav-item">Workspace</li></Link>
            <li class="nav-item" onClick={
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
      </nav>
      </>
  )
}

export default Navbar