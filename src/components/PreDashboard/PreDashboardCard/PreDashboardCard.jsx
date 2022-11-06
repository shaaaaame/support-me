import React from 'react';
import './PreDashboardCard.css';
import {Link} from 'react-router-dom'

function PreDashboardCard(props) {
  return (
    <Link to={props.loc} className='predashboard-card'>
      <div className='predashboard-card-container'>
        <h2 className='predashboard-card-title'>{props.title}</h2>
        <img className='predashboard-card-img' src={props.src} alt='card-img'/>
      </div>
    </Link>
  )
}

export default PreDashboardCard