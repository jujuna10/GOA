import React, { useState } from "react";

function FormOfToDo({newTask,handleChange,handleSubmit}) {
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        name="title"
        value={newTask.title || ""}
        onChange={handleChange}
         />
        {/* {!newTask.title ? null : ( */}
            {/* <> */}
                <textarea 
                name="description" 
                placeholder="description"
                value={newTask.description || ""}
                onChange={handleChange}
                ></textarea>

                <button type="submit">submit</button>
            
            {/* </> */}
        {/* )} */}
      </form>


        
    </div>
  )
}

export default FormOfToDo;