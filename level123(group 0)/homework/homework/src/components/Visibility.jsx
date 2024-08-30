import React from 'react'
import { useState } from 'react'

export default function Visibility() {

    const [visibility,setVisibility] = useState(false)

    const handleChange = () => {
        setVisibility((prev) => !prev)
    }

  return (
    <div>
        <input type={visibility ? "text" : "password"}/>
        <input type="checkbox"  onChange={handleChange}/>
    </div>
  )
}
