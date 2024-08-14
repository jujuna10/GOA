// 13. **Timer**: Create a button that starts a timer, and the current time is displayed on the screen.


import React, { useState } from "react";

function Timer(){

    const [second,setSecond] = useState(60)

    function timer(){
        setInterval(() => setSecond(second - 1),1000)

    }
    

    return (
        <div>
            <button onClick={timer()}>click</button>
            {second && <p>{second}</p>}

        </div>
    )
}

export default Timer