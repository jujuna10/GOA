import { Children, createContext, useState } from "react";

const StudentContext = createContext()

const StudentProvider = ({children}) => {
    const [student,setStudent] = useState([])
    console.log(student,"context")

    return(
        <StudentContext.Provider value={{student,setStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export {StudentContext, StudentProvider}
