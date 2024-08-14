import React, { useState } from "react";

function AllTask({allTask,handleDelete}){
    return(
        <ul>
            {allTask.map(({title,description,id}) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        {!description ? null : <p>{description}</p>}

                        <button onClick={() => handleDelete(id)}>x</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default AllTask