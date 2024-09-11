import { useState } from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <div>
      {/* <Form />  */}


      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>
    </div>
  )
}

export default App
