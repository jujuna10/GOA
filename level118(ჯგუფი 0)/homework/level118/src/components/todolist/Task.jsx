// 6. **List of Items**: Create an input field and a button. When the button is clicked, the text from the input field is added to a list displayed on the screen.

import React, { useState } from 'react'

function Task({task,handleChange,handleSubmit}){
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='title' 
                placeholder='task' 
                value={task.title || ""}
                onChange={handleChange}/>
            <button type='submit'>add task</button>
        </form>
    )

}

export default Task