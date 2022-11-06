import React from 'react';
import LandingNavbar from './LandingNavbar/LandingNavbar';
import LandingText from './LandingText/LandingText';
import Footer from '../Footer/Footer';
import lofi_girl from '../../assets/lofi-girl.png';
import lofi_girl_cat from '../../assets/lofi-girl-cat.png';
import './Landing.css';

function Landing() {
  return (
    <div className='landing'>
      <LandingNavbar className='landing-nav'/>
      
      <div className='landing-hero'>
        <LandingText className='landing-text'/>
        <img className='landing-img' src={lofi_girl} alt='lofi-girl'/>
      </div>

      <div className='landing-goal'>
        <div className='landing-goal-text'>
          <h2 className='landing-goal-text-title'><b>our goal</b></h2>
          <p className='landing-goal-text-body'>we want you to be able to seek the help you want 
          whenever you need it, and pay back by helping others whenever they do.</p>
        </div>
        <img className='landing-goal-img' src={lofi_girl_cat} alt='lofi-girl-cat'/>
      </div>

      <div className='landing-bottom'>
        <h1 className='landing-bottom-title'>need help?</h1>
        <h2 className='landing-bottom-subtitle'>we're here for you.</h2>
        <button className='landing-bottom-button'>join now</button>
      </div>

      <Footer className='landing-footer'/>

    </div>
  )
}

export default Landing