import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function AutoIncrement() {

    const [count,setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        },1000)

        return () => clearInterval(interval)

    },[])


  return (
    <div>
        <p>{count}</p>
    </div>
  )
}
