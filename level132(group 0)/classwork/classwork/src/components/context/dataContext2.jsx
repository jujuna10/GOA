import { createContext } from "react";

const dataContext = createContext()

const DataProvider = ({children}) => {
    const textt = {
        eng: "hello",
        geo: "გამარჯობა"
    }

    return(
        <dataContext.Provider value={{textt}}>
            {children}
        </dataContext.Provider>
    )
}

export {dataContext, DataProvider}