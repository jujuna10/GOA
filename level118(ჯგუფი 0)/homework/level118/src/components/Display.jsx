// 4. **Show/Hide Element**: Create a button that toggles the visibility of a paragraph of text.

import React, { useState } from 'react'

function DisplayOfText(){
    const [display,setDisplay] = useState(true)
    function isOn(){
        setDisplay(prevValue => !prevValue )
    }

    return (
        <div>
            <button onClick={isOn}>click</button>
            {display && <p>hello</p>}

        </div>
    )

}

export default DisplayOfText