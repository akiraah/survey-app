import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../resource/ziggo-logo.svg'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <section className="flex flex-col justify-center bg-white h-screen">
        <img src={logo} className="self-center lg:h-25 lg:w-25" alt="logo" />
      </section>
      <section className="flex flex-col justify-center bg-orange-400 h-screen">
        <button
          type="button"
          className="self-center bg-white text-black font-bold uppercase h-12 w-80 hover:shadow-lg focus:shadow-lg shadow-md
                    rounded-full transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          onClick={() => navigate("/question-one")}
        >
          Begin
        </button>
      </section>
    </div>
  )
}

export default Home
