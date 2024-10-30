import { useState } from 'react'
import Factorial from './component/Factorial'
import Fruit from './component/Fruit'
import Operation from './component/Operation'
import MemoAndCall from './component/MemoAndCall'


function App() {
  const [count, setCount] = useState(0)
  const [age,setAge] = useState(0)

  return (
    <>
      {/* <Factorial />
      <Fruit />
      <Operation /> */}
      <MemoAndCall age={age} />
      <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      </div>
    </>
  )
}

export default App
