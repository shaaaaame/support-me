import React from 'react'
import { useLocation } from 'react-router-dom'
import './Profile.css';

function Profile() {
    const { state } = useLocation();
    const { img, firstName, lastName, education, number, desc, email} = state;
    return (
        <div className='profile'>
            <div className='profile-container'>
                <img className='profile-img' src={img} alt='profile-img'/>
                <div className='profile-body'>
                    <h1 className='profile-name'>{firstName + ' ' + lastName}</h1>
                    <p className='profile-edu'>{education}</p>
                    <p className='profile-number'>{'contact number: ' + number}</p>
                    <p className='profile-desc'>{desc}</p>
                    <button className='profile-btn' onClick={() => window.location = 'mailto:' + email}>connect</button>
                </div>
            </div>
        </div>
    )
}

export default Profile