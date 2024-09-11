import React, { useState } from 'react'

export default function Form() {



    const [name,setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }


  return (
    <div>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <h1>{name}</h1>
    </div>
  )
}
