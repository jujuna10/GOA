import React, { useEffect, useState } from 'react'

export default function Clean() {

    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }

    useEffect(() => {
        document.addEventListener("mousedown",handleClick)

        return () => {
            document.removeEventListener("mousedown",handleClick)
        }
    })

  return (
    <div>
        <p>click {count}</p>
    </div>
  )
}
