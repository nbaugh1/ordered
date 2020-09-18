import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Profile = ({ authed }) => {

    const context = useContext(AuthContext)
    context.setIsAuth(authed)

    return (
        <div>
            <h1>Hello</h1>
            <h1>Authed? {context.isAuth}</h1>
        </div>
    )
}

export default Profile
