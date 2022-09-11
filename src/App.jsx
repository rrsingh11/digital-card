import { useState } from 'react'
import Main from './components/Main'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='card'>
      <Main />
      <About />
      <Footer />
    </div>
  )
}

export default App
