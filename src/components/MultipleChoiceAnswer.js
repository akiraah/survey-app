import React, { useState } from 'react'
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io'

const MultipleChoiceAnswer = ({ answer }) => {
  const [isButtonActive, setIsButtonActive] = useState(false)
  const changeBorderColour = isButtonActive
    ? 'border-orange-400'
    : 'hover:border-blue-400'
  return (
    <div
      className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 ${changeBorderColour}`}
    >
      <p>{answer}</p>
      <button
        type="button"
        className="self-end px-4 py-3 text-gray-400 form-check-input w-4 focus:outline-none transition duration-200 my-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        onClick={() => setIsButtonActive((isClicked) => !isClicked)}
      >
        {!isButtonActive ? (
          <IoIosRadioButtonOff size="1.5rem" />
        ) : (
          <IoIosRadioButtonOn className="text-orange-400" size="1.5rem" />
        )}
      </button>
    </div>
  )
}

export default MultipleChoiceAnswer
