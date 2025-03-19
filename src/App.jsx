import { useState, useEffect } from 'react'
import { Home, Layout, PortfolioDetails } from './utils/Router'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Portfolio</h1>
    </>
  )
}

export default App
