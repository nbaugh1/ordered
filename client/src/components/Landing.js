import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export const Landing = () => {
    const history = useHistory()
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
