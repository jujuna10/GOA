import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Click() {

    const [click,setClikc] = useState(0)

    const handleClikc = () => {
        setClikc((prev) => prev + 1)
    }

    useEffect(() => {
        if(click > 5){
            alert("!!!!!")
        }
    })

  return (
    <div>
        <button onClick={handleClikc}>click</button>
    </div>
  )
}
