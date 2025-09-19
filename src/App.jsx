import React from 'react'
import Navbar from './components/Navbar'
import Banner from "./components/Banner"
// import { Routes, Route } from 'react-router-dom'
import Cat from './components/Cat'
import Product from './components/Product'
import Offer from './components/Offer'
import AllProduct from './components/AllProduct'
import Testimonial from './components/Testimonial'
import Blogs from './components/Blogs'
import Services from './components/Services'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cat/>
      <Product/>
      <Offer/>
      <AllProduct/>
      <Testimonial/>
      <Blogs/>
      <Services/>
      <Footer/>
    </div>
  )
}

<h1>Hello E-Mart</h1>


export default App
