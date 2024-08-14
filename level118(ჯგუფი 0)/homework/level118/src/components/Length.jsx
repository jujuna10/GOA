// 12. **Character Counter**: Create an input field that shows the number of characters typed.

import React, { useState } from "react";

function ButtonLength(){
    const [len,setLen] = useState(0)

    const handleChange = (event) => {
        setLen(event.target.value.length)

    }

    return (
        <div>
            <form>
                <input
                type="text" 
                name="text"
                onChange={handleChange}
                />
            </form>
            {len && <p>{len}</p>}

        </div>
    )
}

export default ButtonLength