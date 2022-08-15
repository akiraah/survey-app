import React from 'react'

const MultipleChoiceAnswer = ({ answer, radioButtonComponent, isActive }) => {
  const changeBorderColour = isActive
    ? 'border-orange-400'
    : 'hover:border-blue-400'
    console.log(isActive)

  return (
    <div
      className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 ${changeBorderColour} peer-checked:bg-black`}
    >
      <p>{answer}</p>
      {radioButtonComponent}
    </div>
  )
}

export default MultipleChoiceAnswer
