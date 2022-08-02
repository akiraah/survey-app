import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FirstPage from './pages/FirstPage'

const App = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/survey-app', element: <Home /> },
    { path: '/question-one', element: <FirstPage /> },
  ])
  return element
}

export default App
