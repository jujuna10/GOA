import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import StudentForm from './component/StudentForm'
import StudentItem from './component/StudentItem'


function App() {

  const location = useLocation()

  return (
    <div>
      {location.pathname === '/' && (
        <Navbar />
      )}

      <Routes>
        <Route path='/registre' element={<> <Navbar /> <StudentForm /> </>}/>
        <Route path='/list' element={<> <Navbar /> <StudentItem /> </>}/>


      </Routes>
    </div>
  )
}

export default App
