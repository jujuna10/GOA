import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ConsoleLog() {

    const [valuee,setValuee] = useState("")

    const handleChange = (e) => {
        setValuee(e.target.value)
    }

    useEffect(() => {
        console.log("changed")
    })

  return (
    <div>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}
