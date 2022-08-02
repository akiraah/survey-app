import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'

import FirstPage from './pages/FirstPage'
import Home from './pages/Home'
import SecondPage from './pages/SecondPage'

const App = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/survey-app', element: <Home /> },
    { path: '/question-one', element: <FirstPage /> },
    { path: '/question-two', element: <SecondPage /> },
  ])
  return element
}

export default App
