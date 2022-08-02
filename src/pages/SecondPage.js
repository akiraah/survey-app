import React from 'react'
import { useNavigate } from 'react-router-dom'

const SecondPage = () => {
  const navigate = useNavigate()

  return (
    <section className="question-section">
      <div className="question-container">
        <div className="question-card">
          <h1>A random question...</h1>
        </div>
        <div className="answer-section">
          <input className="open-answer" placeholder="Enter your answer..." />
        </div>
      </div>
      <div className="button-container">
        <button
          className="btn btn-primary nav"
          onClick={() => navigate('/question-one')}
        >
          <span className="btn-title">Back</span>
        </button>
        <button
          className="btn btn-primary nav"
          onClick={() => navigate('/question-two')}
        >
          <span className="btn-title">Next</span>
        </button>
      </div>
    </section>
  )
}

export default SecondPage
