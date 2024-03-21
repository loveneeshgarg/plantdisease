import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Plants from './components/Plants/Plants'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Plants/>
      <Footer/>
    </div>
  )
}

export default App
