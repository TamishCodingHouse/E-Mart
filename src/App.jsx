import React from 'react'
import Navbar from './components/Navbar'
import Banner from "./components/Banner"
// import { Routes, Route } from 'react-router-dom'
import Cat from './components/Cat'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cat/>
    </div>
  )
}

export default App
