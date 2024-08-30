import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Title() {

    const [title,setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        document.title = `${title}`
    },[title])

  return (
    <div>
        <input type="text" name="title" onChange={handleChange}/>
    </div>
  )
}
