import { useState } from 'react'
import Home from './Home.jsx'

import { Route, Routes, Link } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'
import Price from './Price.jsx'

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/product">product</Link></li>
        <li><Link to="/price">price</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/price' element={<Price />} />
      </Routes>
    </>
  )
}

export default App
