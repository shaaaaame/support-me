import React from 'react';
import {Link} from 'react-router-dom';
import './LandingNavbar.css'

function LandingNavbar(props) {
  return (
    <nav className='landing-nav'>
        <Link className='landing-nav-logo' to="/"><h2><b>support-me</b></h2></Link>
        <div className='landing-nav-container'>
            <p className='landing-nav-btn' onClick={props.signIn}>sign in</p> 
            <p className='landing-nav-btn landing-nav-join' onClick={props.signUp}>join</p>
        </div>
    </nav>
  )
}

export default LandingNavbar