import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionCard.css';

function QuestionCard(props) {
  return (
    <Link to={props.loc} className='question-card'>
        <h3 className='question-card-title'>{props.title}</h3>
    </Link>
  )
}

export default QuestionCard