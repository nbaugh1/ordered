import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom'

export const Landing = () => {
    const history = useHistory()
    const changeToMenuRoute = () => {
        let path = '/menus'
        window.location.href = path
    }
    const changeToSignUpRoute = () => {
        let path = '/signup'
        window.location.href = path
    }
    return (
        <Container>
            <p>hello</p>
            <Button
                onClick={changeToMenuRoute}
            >
                View Menu
            </Button>
            <br />
            <br />
            <Button
                onClick={changeToSignUpRoute}
            >
                Sign Up
            </Button>
        </Container>
    )
}
