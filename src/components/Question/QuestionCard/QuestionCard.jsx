import React from 'react'
import { useNavigate } from 'react-router-dom';
import './QuestionCard.css';

function QuestionCard(props) {
  const navigate = useNavigate()

  return (
    <button className='question-card' onClick={() => navigate('/question-description', {state: {text : props.title}})}>
        <p>{props.title}</p>
    </button>
  )
}

export default QuestionCard