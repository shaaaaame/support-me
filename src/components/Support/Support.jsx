import React from 'react'
import SupportCard from './SupportCard/SupportCard'
import './Support.css'
import { System } from '../Backend/System';


 function Support() {
  return (
    <div className='support'>
        <h1 className='support-title'>thanks for <b>supporting!</b></h1>
        <p className='support-subtitle'>pick a ticket to help</p>
        <div className='support-container'>
            <SupportCard title={questions[0]['description']} />
            <SupportCard title={questions[1]['description']} />
            <SupportCard title={questions[2]['description']} />
        </div>
    </div>
  )
}

export default Support