import React from 'react'

import './SupportCard.css'
function SupportCard(props) {
  return (
    <button className='support-card'>
        <h3 className='support-card-title'>{props.title}</h3>
    </button>
  )
}

export default SupportCard