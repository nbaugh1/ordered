import React from 'react'
import Button from 'react-bootstrap/Button'

export const Landing = () => {
    const changeToMenuRoute = () => {
        let path = '/menus'
        window.location.href = path
    }


    return (
        <div>
            <p>hello</p>
            <Button
                onClick={changeToMenuRoute}
            >
                View Menu
            </Button>
        </div>
    )
}
