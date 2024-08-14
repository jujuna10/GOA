// 5. **Change Background Color**: Create a button that changes the background color of a div each time it is clicked.

import React, { useState } from 'react'

function BackgroundColor(){
    const [color,setColor] = useState("white")
    const colors = ["yellow","blue","red","orange"]
    let index = 0

    function changeColor(){
        setColor(colors[index])
        index = (index + 1) % colors.length


    }

    return (
        <div style={{backgroundColor: color}}>
            <button onClick={changeColor}>click</button>
        </div>
    )

}

export default BackgroundColor