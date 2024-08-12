import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import ImageOfDog from './components/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Title />
      <ImageOfDog />
    </div>


  )
}

export default App
