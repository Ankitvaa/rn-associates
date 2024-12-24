import { useState } from 'react'
import Header from './components/home/Header'
import Slider from './components/home/Slider'
import About from './components/home/Slider'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
