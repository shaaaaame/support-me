import React from 'react'

function QuestionDescription(props) {
  return (
    <div className='question-description'>
        <h1 className='question-description-title'>full description</h1>
        <div className='question-description-box'>
            <p className='question-description-text'>{props.text}</p>
        </div>
        <button className='question-description-btn'>i gotchu</button>
    </div>
  )
}

export default QuestionDescription