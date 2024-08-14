// 1. **Counter**: Create a button that, when clicked, increments a counter displayed on the screen.

import React, { useState } from 'react'

function Counter(){
    const [count,setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>click</button>
        </div>
    )
}

export default Counter