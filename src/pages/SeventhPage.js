import { grey, orange } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'

const FirstPage = () => {
  const [selectedValue, setSelectedValue] = useState('a')

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  return (
    <>
      <section className="flex flex-col bg-[#f1f2f3] h-screen w-screen justify-evenly">
        <div className="flex flex-col self-center gap-y-28">
          <div className="self-center container h-40 w-80 p-12 rounded-3xl border-2 border-orange-400 bg-white drop-shadow-xl">
            <h1 className={'text-center font-sans'}>7th question...</h1>
          </div>
          <div className="container mx-auto flex flex-row justify-evenly">
            <div className="card">
              {/* <input
                checked={controlProps('b').checked}
                type="text"
                className="peer"
                hidden
              /> */}
              <div
                className={`w-96 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 hover:border-blue-400 peer-checked:border-orange-400`}
              >
                <p className={'text-center'}>lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navigation back={'6'} forward={'8'} />
    </>
  )
}

export default FirstPage
