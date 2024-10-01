import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children, initialIsLogged = false, initialUser = null }) => {
    const [isLogged, setIsLogged] = useState(initialIsLogged)

    return (
        <UserContext.Provider value={{ isLogged, user: initialUser, setIsLogged }}>
            {children}
        </UserContext.Provider>
    );
};
