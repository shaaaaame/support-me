import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import QuestionCard from './QuestionCard/QuestionCard';
import './Question.css';

function SendQuestion(question){
    // send question to database
    console.log(question);
}

function AfterQuestion(){
    return(
        <div className='question-after'>
            <h1 className='question-after-title'>thanks for the question! we'll get back to you shortly.</h1>
            <h2 className='question-after-subtitle'>what would you like to do in the meantime?</h2>
            <div className='question-after-cards'>
                <QuestionCard loc='/predashboard' title='go back'/>
                <QuestionCard loc='/study' title='join a study session'/>
                <QuestionCard loc='/over' title='feeling overwhelmed?'/>
                <QuestionCard loc='/support' title='looking to support?'/>
            </div>
        </div>
    )
}

function Question() {
    const [question, setQuestion] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    }

    const sendQuestion = () =>{
        setHasSubmitted(true);
        SendQuestion(question);
    }

    return (
        <div className='question'>
            {hasSubmitted ? <AfterQuestion /> : 
            <>
                <h1 className='question-title'>ask me <b>anything.</b></h1>
                <textarea className='question-fill' onChange={handleQuestionChange} />
                <button className='question-submit' onClick={sendQuestion}>post</button>  
            </>}
        </div>
    )
}

export default Question