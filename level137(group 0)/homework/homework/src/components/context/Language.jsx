import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();



export const LanguageProvider = ({ children}) => {
    const [language, setLanguage] = useState("en")

    const translate = {
        en:"hello",
        ka:"გამარჯობა"
    }

    const handleSwitch = (e) => {
        e.preventDefault()
        if(language == "en"){
            setLanguage("ka")
        }else{
            setLanguage("en")
        }
    }
    

    return (
        <LanguageContext.Provider value={{language,setLanguage,handleSwitch, translate}}>
            {children}
        </LanguageContext.Provider>
    );
};