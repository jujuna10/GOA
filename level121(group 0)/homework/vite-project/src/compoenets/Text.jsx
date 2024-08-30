import React, { useState } from 'react'

export default function Text() {

    const [show,setShow] = useState("hidden")
    const handleClick = () => {
        setShow((prev) => prev === "hidden" ? "visible" : "hidden")
    }

  return (
    <div>

        <div style={{ maxWidth:200, height:70,overflow:show,marginBottom:100} }>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui a molestias porro facilis perspiciatis, soluta beatae veritatis praesentium officia nam accusantium cumque saepe sed maxime dolor quidem velit consectetur.</p>
            
        </div>
        <div>
            <button onClick={() => handleClick()}>read more</button>
        </div>
    </div>
  )
}
