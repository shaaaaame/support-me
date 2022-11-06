import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
  return (
    <nav className='nav'>
        <h2><b>support-me : {props.title}</b></h2>
        <div className='nav-container'>
            <Link to='/question'><FeatherIcon className='nav-icon' icon='help-circle' /></Link>
            <Link to='/study'><FeatherIcon className='nav-icon' icon='book-open'/></Link>
            <Link to='/support'><FeatherIcon className='nav-icon' icon='user'/></Link>
            <div className='nav-profile'>
                {/* get initials of name here. display inital */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar