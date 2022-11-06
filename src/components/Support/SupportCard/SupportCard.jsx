import React from 'react';
import { useNavigate } from 'react-router-dom';

import './SupportCard.css';

function SupportCard(props) {
  const navigate = useNavigate();

  return (
    <button className='support-card' onClick={() => navigate("/question-description", {state : {text : props.title}})}>
        <h3 className='support-card-title'>{props.title}</h3>
    </button>
  )
}

export default SupportCard