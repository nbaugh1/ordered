import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={isAuth, setIsAuth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider