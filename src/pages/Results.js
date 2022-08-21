import React, { useState, useEffect } from 'react'

import ziggoSpeedMeter from '../resource/ziggo-speed-meter.gif'

const Results = () => {
  const [isVisible, setVisible] = useState(true)
  const loadingElement = (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 classNames="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  )
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [])

  return (
    <section className="flex flex-col justify-center bg-[#f1f2f3] h-screen w-screen">
      <>
        {isVisible ? (
          loadingElement
        ) : (
          <>
            <img
              src={ziggoSpeedMeter}
              className="self-center w-2/5 lg:h-25 lg:w-25"
              alt="logo"
            />
          </>
        )}
      </>
    </section>
  )
}

export default Results
