import React, { useState } from "react";
import FormOfToDo from "./Form";
import AllTask from "./AllTask";

function FunctionOfToDo(){
    const [newTask, setNewTask] = useState({})
    const handleChange = ({target}) => {
        const {name,value} = target
        setNewTask((prev) => ({...prev,[name]:value}))
    }

    const [allTask,setAllTask] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!newTask.title) return null
        setAllTask((prev) => [newTask,...prev])
        setNewTask({})
    }

    const handleDelete = (idRemove) => {
        setAllTask((prev) => prev.filter((task) => task.id !== idRemove))
    }

    return(
        <div>
            <h1>task</h1>
            <FormOfToDo 
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <AllTask allTask={allTask} handleDelete={handleDelete}/>
        </div>
    )
}

export default FunctionOfToDo