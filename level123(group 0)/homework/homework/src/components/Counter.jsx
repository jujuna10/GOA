import React from 'react'
import { useState } from 'react'

export default function Counter() {

    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
