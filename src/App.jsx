import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Products />
      <Slider />
      <Footer />
    </>
  )
}

export default App
