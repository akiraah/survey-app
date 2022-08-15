import { grey, orange } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MultipleChoiceAnswer from '../components/MultipleChoiceAnswer'

const FirstPage = () => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState('a')
  const [isActive, setActive] = useState(false)

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }  
  
  const controlProps = (item) => {
    return {
      // onClick: () => setActive(true),
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    }
  }

  return (
    <section className="flex flex-col bg-[#f1f2f3] h-screen w-screen justify-evenly">
      <div className="flex flex-col self-center gap-y-28">
        <div className="self-center container h-40 w-80 p-12 rounded-3xl border-2 border-orange-400 bg-white drop-shadow-xl">
          <h1 className="leading-8 font-sans">A random question...</h1>
        </div>
        <div className="container flex flex-row sm:flex-wrap justify-evenly gap-14">
          <MultipleChoiceAnswer
            answer={'Test answer 1'}
            radioButtonComponent={
              <Radio
                className="self-end px-5 py-3 bg-center bg-contain float-left mr-2 cursor-pointer"
                {...controlProps('e')}
                sx={{
                  color: grey[400],
                  '&.Mui-checked': {
                    color: orange[600],
                  },
                }}
              />
            }
          />
          <MultipleChoiceAnswer answer={'Test answer 2'} isActive={isActive} radioButtonComponent={
              <Radio
                className="self-end px-5 py-3 bg-center bg-contain float-left mr-2 cursor-pointer"
                {...controlProps('d')}
                sx={{
                  color: grey[400],
                  '&.Mui-checked': {
                    color: orange[600],
                  },
                }}
              />
            } />
          <MultipleChoiceAnswer answer={'Test answer 3 '} buttonId={3} />
          <MultipleChoiceAnswer answer={'Test answer 4'} buttonId={4} />
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
