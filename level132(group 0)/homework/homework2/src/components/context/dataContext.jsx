import React, { createContext, useState } from 'react';

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [acc, setAcc] = useState({
        name: 'John',
        email: 'john@example.com'
    })

    return (
        <dataContext.Provider value={{ acc, setAcc }}>
            {children}
        </dataContext.Provider>
    )
};

export { dataContext, DataProvider }
