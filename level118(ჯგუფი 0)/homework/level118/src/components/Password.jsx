// 9. **Show Password**: Create a password input field with a checkbox that, when checked, shows the password as plain text.

import React, { useState } from "react";

function Password(){
    const [visibility,setVisibility] = useState(false)

    const handleChange = () => {
        setVisibility((prev) => !prev)
    }

    return (
        <div>
            <form>
                <input 
                type={visibility ? "text" : "password"}
                name="password"/>
                <input 
                type="checkbox" 
                name="box"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Password
