import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Product from './components/Product'
import Price from './components/Price'
import Page1 from './components/Page1'
import { Route, Routes, Link } from 'react-router-dom'


function App() {

  return (
    <div>
      {/* <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'about'}>About</Link></li>
        <li><Link to={'profile'}>Profile</Link></li>
        <li><Link to={'product'}>Product</Link></li>
        <li><Link to={'price'}>Price</Link></li>
      </ul> */}


        <Page1 />

      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/price' element={<Price />}/>

      </Routes> */}
    </div>
  )
}

export default App
