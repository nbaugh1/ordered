import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export const Landing = () => {
    const changeToMenuRoute = () => {
        let path = '/menus'
        window.location.href = path
    }
    const changeToSignUpRoute = () => {
        let path = '/signup'
        window.location.href = path
    }
    const changeToLoginRoute = () => {
        let path = '/login'
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
            <br />
            <br />
            <Button
                onClick={changeToLoginRoute}
            >
                Login
            </Button>
        </Container>
    )
}
