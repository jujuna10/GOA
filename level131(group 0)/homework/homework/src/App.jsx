import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Result from './components/Result'
import Form from './components/Form'

function App() {
    const [city, setCity] = useState("")

    return (
      <div>

        <Form setCity={setCity}/>
            <Routes>
                <Route path="/result" element={<Result city={city} />} />
            </Routes>
      </div>
    )
}

export default App
