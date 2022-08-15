import React, { createContext, useState } from 'react'

const ButtonContext = createContext()

export const ButtonProvider = (props) => {
  const [areButtonsClicked, setButtonStates] = useState([
    {
      id: 1,
      isActive: false,
    },
    {
      id: 2,
      isActive: false,
    },
    {
      id: 3,
      isActive: false,
    },
    {
      id: 4,
      isActive: false,
    },
  ])

  const setActiveButtonGroups = (buttonEvent) => {
    const buttonStatesCopy = [...areButtonsClicked].map((item) => {
      if (item.id === buttonEvent.id) {
        return {
          ...item,
          isActive: true,
        }
      }
      return {
        id: buttonEvent.id,
        isActive: false,
      }
    })
    setButtonStates(buttonStatesCopy)
  }

  return (
    <ButtonContext.Provider value={{ setActiveButtonGroups, areButtonsClicked }}>
      {props.children}
    </ButtonContext.Provider>
  )
}

export default ButtonContext
