import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  IoIosRadioButtonOn,
  IoIosRadioButtonOff,
} from 'react-icons/io'

const FirstPage = () => {
  const navigate = useNavigate()
  const [isClicked, setClick] = useState(false)
  console.log(isClicked)
  const containerHighlightWhenActive = isClicked
    ? 'border-orange-400'
    : 'hover:border-blue-400'
  return (
    <section className="flex flex-col bg-[#f1f2f3] h-screen w-screen justify-evenly">
      <div className="flex flex-col self-center gap-y-28">
        <div className="self-center container h-40 w-80 p-12 rounded-3xl border-2 border-orange-400 bg-white drop-shadow-xl">
          <h1 className="leading-8 font-sans">A random question...</h1>
        </div>
        <div className="container flex flex-row sm:flex-wrap justify-evenly gap-14">
          <div
            className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 ${containerHighlightWhenActive}`}
          >
            <p>Answer one</p>
            
            <button
              type="button"
              className="self-end px-4 py-3 text-gray-400 form-check-input w-4 focus:outline-none transition duration-200 my-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              onClick={() => setClick((isClicked) => !isClicked)}
            >
              {!isClicked ? (
                <IoIosRadioButtonOff size="1.5rem" />
              ) : (
                <IoIosRadioButtonOn className="text-orange-400" size="1.5rem" />
              )}
            </button>
          </div>
          <div className="card">
            <p>Answer two</p>
            <input type="radio" value="option1" checked={false} />
          </div>
          <div className="card">
            <p>Answer Three</p>
            <input type="radio" value="option1" checked={false} />
          </div>
          <div className="card">
            <p>Answer Four</p>
            <input type="radio" value="option1" checked={false} />
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
