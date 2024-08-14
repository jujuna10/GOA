// 2. **Toggle Text**: Create a button that toggles between displaying "Hello" and "Goodbye" when clicked.


import React, { useState } from 'react'

function StringChange(){
    const [string,setString] = useState("hello")
    function stringChanged(){
        setString(prevValue => prevValue === "hello" ? "goodbay" : "hello")
    }

    return (
        <div>
            <p>string:{string}</p>
            <button onClick={stringChanged}>click</button>
        </div>
    )

}

export default StringChange
