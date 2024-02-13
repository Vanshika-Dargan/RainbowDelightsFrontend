import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Slider />
      <Footer />
    </>
  )
}

export default App