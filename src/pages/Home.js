import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../resource/ziggo-logo.svg'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <section className="one">
        <img src={logo} className="survey-logo" alt="logo" />
      </section>
      <section className="two">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/question-one')}
        >
          <span className="btn-title">Begin</span>
        </button>
      </section>
    </div>
  )
}

export default Home
