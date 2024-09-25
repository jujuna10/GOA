import { useState } from 'react'
import Registre from './components/Registre'
import Window from './components/Window'
import Api from './components/Api'
import Timer from './components/Timer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Registre /> */}
      {/* <Window /> */}
      {/* <Api /> */}
      <Timer />
    </>
  )
}

export default App
