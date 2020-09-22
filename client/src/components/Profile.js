import React from 'react'

const Profile = () => {

    const currentUser = localStorage.getItem('currentUser')

    return (
        <div>
            <h1>Hello</h1>
            <p>Current User is: {currentUser}</p>
        </div>
    )
}

export default Profile
