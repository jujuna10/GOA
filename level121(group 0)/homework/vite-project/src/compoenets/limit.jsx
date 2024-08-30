import React, { useState } from 'react'

export default function Limit() {

    const [len,setLen] = useState(0)
    const handleChange = (event) => {
        const lengthOfInput = event.target.value.length
        lengthOfInput === 10 ? alert("limit") : setLen(lengthOfInput)
        // setLen((prev) => lengthOfInput === 10 ? alert("limit") : setLen(lengthOfInput))
    }

  return (
    <div>
        <input type="text" name="text" onChange={handleChange}/>
    </div>
  )
}
