import React from 'react'
import BeginButton from '../components/BeginButton'

import logo from '../resource/ziggo-logo.svg'

const Home = () => {
  return (
    <div className="landing-container">
      <section className="flex flex-col justify-center bg-white h-screen">
        <img src={logo} className="self-center lg:h-25 lg:w-25" alt="logo" />
      </section>
      <section className="flex flex-col justify-center bg-orange-400 h-screen">
        <BeginButton />
      </section>
    </div>
  )
}

export default Home
