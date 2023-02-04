import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className='navbar-main'>
      {/* <Link to = "/"><img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMdb Logo"/></Link> */}
      <Link to = "/" style={{textDecoration: "none"}}><span className='nav-logo'>KMdb</span></Link>
      <Link to = "/movies/popular"  style={{textDecoration: "none"}}><span className='nav-items'>Popular</span></Link>
      <Link to = "/movies/top-rated" style={{textDecoration: "none"}}><span className='nav-items'>Top Rated</span></Link>
      <Link to = "/movies/upcoming" style={{textDecoration: "none"}}><span className='nav-items'>Upcoming</span></Link>
    </nav>
  )
}

export default Header