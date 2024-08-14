// 15. **Dynamic Styling**: Create a component where the text color changes dynamically based on the user's selection from a dropdown menu.


import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("black");

  const handleChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div>
      <p style={{ color: color }}>hello</p>
      <select
        id="color-select"
        value={color}
        onChange={handleChange}
        >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
    </div>
  )
}

export default Color;
