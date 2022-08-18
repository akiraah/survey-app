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
            <h1 className={'text-center font-sans'}>2nd question...</h1>
          </div>
          <div className="container flex flex-row justify-evenly gap-14 sm:gap-4">
            <div className="card">
              <input
                checked={controlProps('b').checked}
                type="radio"
                className="peer"
                hidden
              />
              <div
                className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 hover:border-blue-400 peer-checked:border-orange-400`}
              >
                <p className={'text-center'}>lorem ipsum</p>
                <Radio
                  className="self-end px-5 py-3 bg-center bg-contain float-left mr-2 cursor-pointer peer"
                  {...controlProps('b')}
                  sx={{
                    color: grey[400],
                    '&.Mui-checked': {
                      color: orange[600],
                    },
                  }}
                />
              </div>
            </div>

            <div className="card">
              <input
                checked={controlProps('c').checked}
                type="radio"
                className="peer"
                hidden
              />
              <div
                className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 hover:border-blue-400 peer-checked:border-orange-400`}
              >
                <p className={'text-center'}>lorem ipsum</p>
                <Radio
                  className="self-end px-5 py-3 bg-center bg-contain float-left mr-2 cursor-pointer"
                  {...controlProps('c')}
                  sx={{
                    color: grey[400],
                    '&.Mui-checked': {
                      color: orange[600],
                    },
                  }}
                />
              </div>
            </div>

            <div className="card">
              <input
                checked={controlProps('d').checked}
                type="radio"
                className="peer"
                hidden
              />
              <div
                className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 hover:border-blue-400 peer-checked:border-orange-400`}
              >
                <p className={'text-center'}>lorem ipsum</p>
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
              </div>
            </div>

            <div className="card">
              <input
                checked={controlProps('e').checked}
                type="radio"
                className="peer"
                hidden
              />
              <div
                className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 hover:border-blue-400 peer-checked:border-orange-400`}
              >
                <p className={'text-center'}>lorem ipsum</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navigation back={'1'} forward={'3'} />
    </>
  )
}

export default FirstPage
