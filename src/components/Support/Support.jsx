import React from 'react'
import SupportCard from './SupportCard/SupportCard'
import './Support.css'

function Support() {
  return (
    <div className='support'>
        <h1 className='support-title'>thanks for <b>supporting!</b></h1>
        <p className='support-subtitle'>pick a ticket to help</p>
        <div className='support-container'>
            <SupportCard title='dsaasdasdadasdsadadsdas' />
            <SupportCard title='dsaasdasdadasdsadadsdas' />
            <SupportCard title='dsaasdasdadasdsadadsdas' />
        </div>
    </div>
  )
}

export default Support