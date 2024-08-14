// 10. **Disable/Enable Button**: Create a button that is disabled until a checkbox is checked.

import React, { useState } from "react";

function ButtonVisibility(){
    const [visibility,setVisibility] = useState(false)

    const handleChange = (event) => {
        setVisibility(event.target.checked)

    }

    return (
        <div>
            <form>
                <input
                type="checkbox" 
                name="box"
                onChange={handleChange}
                />
            </form>
            {visibility && <button>click</button>}

        </div>
    )
}

export default ButtonVisibility