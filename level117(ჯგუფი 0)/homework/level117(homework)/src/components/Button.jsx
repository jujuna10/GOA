import React from "react";
import { useState } from "react";

function ButtonClick(){
    const [display,setDisplay] = useState(false)
    function handleClick(){
        setDisplay(prevDisplay => ! prevDisplay)
        

    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            {display && <p>hello</p>}
        </div>
    )

}

export default ButtonClick