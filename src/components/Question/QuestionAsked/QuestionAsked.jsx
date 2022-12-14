import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionAsked.css';
import {System} from '../../Backend/System';

// let questions = await System.showQuestions();

function QuestionAsked() {
  return (
    <div className='question-asked'>
        <h1 className='question-asked-title'>help is on their way.</h1>
        <h2 className='question-asked-subtitle'>while we're waiting, can you help <b>them?</b></h2>
        <div className='question-asked-cards'>
            <QuestionCard title={'dasdosadsdasdpasidjspdajd'} />
            <QuestionCard title={'dasdosadsdasdpasidjspdajd'}/>
            <QuestionCard title={'dasdosadsdasdpasidjspdajd'}/>
        </div>
    </div>
  );
}

export default QuestionAsked