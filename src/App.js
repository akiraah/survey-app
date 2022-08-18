import React from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'

import FirstPage from './pages/FirstPage'
import Home from './pages/Home'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import FourthPage from './pages/FourthPage'
import FifthPage from './pages/FifthPage'
import SixthPage from './pages/SixthPage'
import SeventhPage from './pages/SeventhPage'
import EightPage from './pages/EightPage'
import NinthPage from './pages/NinthPage'
import TenthPage from './pages/TenthPage'

const App = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/survey-app', element: <Home /> },
    { path: '/1', element: <FirstPage /> },
    { path: '/2', element: <SecondPage /> },
    { path: '/3', element: <ThirdPage /> },
    { path: '/4', element: <FourthPage /> },
    { path: '/5', element: <FifthPage /> },
    { path: '/6', element: <SixthPage /> },
    { path: '/7', element: <SeventhPage /> },
    { path: '/8', element: <EightPage /> },
    { path: '/9', element: <NinthPage /> },
    { path: '/10', element: <TenthPage /> },
    // { path: '/results', element: <SecondPage /> },
  ])

export default App
