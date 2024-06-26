import React, { createContext, useState } from 'react';

export const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState('weegembump');

    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserNameContext.Provider>
    );
};
