import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col bg-[#f1f2f3] h-screen w-screen justify-evenly">
      <div className="flex flex-col self-center gap-y-28">
        <div className="self-center container h-40 w-80 p-12 rounded-3xl border-2 border-orange-400 bg-white drop-shadow-xl">
          <h1 className="leading-8 font-sans">A random question...</h1>
        </div>
        <div className="container flex flex-row justify-evenly gap-14">
          <div className="container">
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


// style="font-size: 23px;line-height: 41px;font-style: italic;letter-spacing: 0.102em;font-weight: 400;"