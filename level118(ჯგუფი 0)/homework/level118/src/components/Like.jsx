// 8. **Like Button**: Create a button that toggles between "Like" and "Unlike" when clicked.

import React, { useState } from "react";

function Like(){
    const [value,setValue] = useState("like")

    const handleChange = () =>{
        setValue((prev) => (prev === "like" ? "unlike" : "like"))
    }

    return (
        <div>
            <button onClick={handleChange}>click</button>
            {value && <p>{value}</p>}
        </div>
    )
}

export default Like