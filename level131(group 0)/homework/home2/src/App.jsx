import { useState } from 'react'
import Advice from './components/Advice'
import Button from './components/Button'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [showButton,setShowButton] = useState(true)

  return (
    <div>
      {showButton ? (
        <Button button={setShowButton} />
      ) : (
        <Routes>
          <Route path="/advice" element={<Advice />} />
        </Routes>
      )}
    </div>
    
  )
}

export default App
