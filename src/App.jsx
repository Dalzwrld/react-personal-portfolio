import React, { useState } from 'react'
import Hero from './components/hero'
import Search from './components/search-input'
import LandingPage from './components/landing-page'
import ProjectCard from './components/projects'
import Form from './components/form'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="">
        <Hero />  
      </div> {/**Hero section */}
      
      <div className=""></div> {/**Search button */}
      <div className=""></div> {/**Landing page */}
      <div className=""></div> {/**Form */}
      <div className=""></div> {/**Footer */}
    </div>
  )
}

export default App
