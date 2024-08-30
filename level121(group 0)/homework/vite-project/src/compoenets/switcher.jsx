import React, { useState } from 'react'

export default function Switcher() {

    const [mode,setMode] = useState("white")
    const handleCheck = () => {
        setMode((prev) => prev === "white" ? "black" : "white")
    }

  return (
    <div style={{backgroundColor: mode}}>
        <input type="checkbox" name="mode" onChange={handleCheck}/>
    </div>
  )
}
