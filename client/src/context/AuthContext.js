import React, { useState, createContext } from 'react'

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ loading: true, data: null });
    const setAuthData = (data) => {
        setAuth({ data: data });
    };
    return (
        <authContext.Provider value={{ auth, setAuthData }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
