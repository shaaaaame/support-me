import React from 'react';
import { Link } from 'react-router-dom';

import PreDashboardCard from './PreDashboardCard/PreDashboardCard';
import teacher from '../../assets/teacher.png';
import student from '../../assets/student.png';
import './PreDashboard.css'

function PreDashboard() {
  return (
    <div className='predashboard'>
        <div className='predashboard-container'>
            <Link to='/support' className='predashboard-btn'>i'm here to support!</Link>
            <Link to='/over' className='predashboard-btn'>i feel overwhelmed :{'('}</Link>
        </div>
        <h1 className='predashboard-title'>i want to:</h1>
        <div className='predashboard-container-cards'>
            <PreDashboardCard title='ask a question' src={teacher} loc='/question'/>
            <PreDashboardCard title='join a study session' src={student} loc='/study'/>
        </div>
    </div>  
  )
}

export default PreDashboard