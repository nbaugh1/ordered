import React, { createContext, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export const AuthContext = createContext()

export const AuthContextProvider = (props) => {

    const [isAuth, setIsAuth] = useState(false)
    const [currentUser, setCurrentUser] = useState(window.localStorage.getItem("current-user"))


    const login = ({ e, email, password, Redirect }) => {
        e.preventDefault()
        axios.post('/api/login', {
            user: {
                email: email,
                password: password,
            },
        }, {
            withCredentials: true
        })
            .then(function (response) {
                console.log(response)
                window.localStorage.setItem("login-response", response.data.loggedIn)
                window.localStorage.setItem("current-user", response.data.user)
                return (
                    <Redirect to='profile' />
                )
            })
            .catch(function (error) {
                console.log(error)
            })


        return (
            <AuthContext.Provider value={{ isAuth, setIsAuth, setCurrentUser, login }}>
                {props.children}
            </AuthContext.Provider>
        )
    }

}