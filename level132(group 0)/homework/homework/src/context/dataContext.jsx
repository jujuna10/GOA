import { createContext, useState } from "react";

const dataContext = createContext()

const DataProvider = ({children}) => {

    const [color,setColor] = useState("dark")
    console.log(color)


    return(
        <dataContext.Provider value={{color, setColor}}>
            {children}
        </dataContext.Provider>
    )
}

export {dataContext, DataProvider}