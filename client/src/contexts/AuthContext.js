import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const login = (event, email, password) => {
        event.preventDefault()
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
                setLoggedIn(response.data.loggedIn)
                localStorage.setItem('currentUser', response.data.user)
                localStorage.setItem('currentSession', response.data.loggedIn)
                window.location.href = '/profile'
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.setItem('currentUser', "")
        localStorage.removeItem('currentSession')
        axios.delete('api/logout', {
            withCredentials: true
        })
        window.location.href = '/'
    }

    const checkSession = () => {
        const session = localStorage.getItem("currentSession")
        setLoggedIn(session)
        console.log('bloop')
    }

    return (
        <AuthContext.Provider value={{ login, logout, setLoggedIn, loggedIn, checkSession }} {...props} />
    )
}

const useAuth = () => React.useContext(AuthContext)
export { AuthProvider, useAuth }









// const onSubmit = (event) => {
//     event.preventDefault()
//     axios.post('/api/login', {
//         user: {
//             email: email,
//             password: password,
//         },
//     }, {
//         withCredentials: true
//     })
//         .then(function (response) {
//             console.log(response)
//             setLoggedIn(response.data.loggedIn)
//             localStorage.setItem('current_user', response.data.user)
//             localStorage.setItem('current_session', response.data.loggedIn)
//             history.push('/profile')
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }