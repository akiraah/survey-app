import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
  const navigate = useNavigate()

  return (
    <section className="question-section">
      <div className="question-container">
        <div className="question-card">
          <h1>A random question...</h1>
        </div>
        <div className="answer-section">
          <div className="card">
            <p>Answer one</p>
            <label>
              <input type="radio" value="option1" checked={true} />
            </label>
          </div>
          <div className="card">
            <p>Answer two</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
          <div className="card">
            <p>Answer Three</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
          <div className="card">
            <p>Answer Four</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="btn btn-primary nav" onClick={() => navigate('/')}>
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

export default FirstPage
