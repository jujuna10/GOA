import { createContext, useContext } from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children, initialTheme}) => {
    return(
        <ThemeContext.Provider value={initialTheme}>
            {children}
        </ThemeContext.Provider>
    )
}