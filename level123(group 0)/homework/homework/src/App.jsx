import { useState } from 'react'
import Counter from './components/Counter'
import Title from './components/Title'
import Visibility from './components/Visibility'
import Api from './components/Api'
import AutoIncrement from './components/AutoIncrement'
import ConsoleLog from './components/ConsoleLog'
import Click from "./components/Click";


function App() {
  const [count, setCount] = useState(0)

  return (
    // <Counter />
    // <Title />
    // <Visibility />
    // <Api />
    // <AutoIncrement />
    // <ConsoleLog />
    <Click />
  )

}

export default App
