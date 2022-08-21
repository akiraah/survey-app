import React, { useState } from 'react'

const OpenEndedQuestionField = () => {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <input
      className={'h-full w-full text-center focus:outline-none'}
      type="text"
      placeholder="Please enter your answer here."
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    ></input>
  )
}

export default OpenEndedQuestionField
