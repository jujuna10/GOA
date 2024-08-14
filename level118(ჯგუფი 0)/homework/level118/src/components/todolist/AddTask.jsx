import { useState } from "react";
import Task from "./Task";

function AddTask(){
    const [task,setTask] = useState({})
    const [allTask,setAllTask] = useState([])

    const handleChange = ({target}) => {
        const {name,value} = target
        setTask((prev) => ({...prev,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!task.title) return 
        setAllTask((prev) => [task,...prev])
        setTask({})
    }

    return (
        <div>
            <p>task</p>
            <Task  
                task={task}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <ul>
                {allTask.map((t, index) => (
                    <li key={index}>{t.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default AddTask