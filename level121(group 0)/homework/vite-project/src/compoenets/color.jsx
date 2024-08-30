import React, { useState } from 'react'

export default function Color() {

    const [color, setColor] = useState("white")
    const handleChange = (event) => {
    const colorIs = event.target.value
    setColor(colorIs)
  }

  return (
    <div style={{backgroundColor: color}}>
        <input type="color" name="color" onChange={handleChange  }/>
    </div>
  )
}
