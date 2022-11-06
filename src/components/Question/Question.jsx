import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard/QuestionCard';
import './Question.css';

function SendQuestion(question){
    // send question to database
    console.log(question);
}

function Question() {
    const [question, setQuestion] = useState('')
    const navigate = useNavigate();

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    }

    const sendQuestion = () =>{
        SendQuestion(question);
        navigate('/terms');
    }

    return (
        <div className='question'>
            <h1 className='question-title'>ask me <b>anything.</b></h1>
            <textarea className='question-fill' onChange={handleQuestionChange} />
            <button className='question-submit' onClick={sendQuestion}>post</button>  
        </div>
    )
}

export default Question