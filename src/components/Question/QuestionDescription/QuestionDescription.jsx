import { ListSubheader } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import andy from '../../../assets/andy.png';
import './QuestionDescription.css';

function QuestionDescription() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { text } = state;
  return (
    <div className='question-description'>
        <h1 className='question-description-title'>full description</h1>
        <div className='question-description-box'>
            <p className='question-description-text'>{text}</p>
        </div>
        <button className='question-description-btn' onClick={() => navigate('/profile', {state : {
          img : andy,
          firstName: 'Andy',
          lastName: 'Liu',
          education : '1st year @ university of toronto (ECE)',
          number: '778-955-6033',
          desc: 'hey! I’m Andy. I’m good at coding but in most of time I’m struggling with learning Linear Algebra. Pleas help me!!',
          email: 'andy@gmail.com',
        }})}>i gotchu</button>
    </div>
  )
}

export default QuestionDescription