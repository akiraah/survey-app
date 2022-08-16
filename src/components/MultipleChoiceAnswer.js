import React from 'react'

const MultipleChoiceAnswer = ({ answer, radioButtonComponent, isActive }) => {
  const changeBorderColour = isActive
    ? 'border-orange-400'
    : 'hover:border-blue-400'
  return (
    <div
      className={`container flex flex-col w-40 h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer border-2 ${changeBorderColour} peer-checked:ring-yellow-500`}
    >
      <p>{answer}</p>
      {radioButtonComponent}
    </div>
  )
}

export default MultipleChoiceAnswer
