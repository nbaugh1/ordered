import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../contexts/AuthContext'


const TopNav = () => {

    const auth = useContext(AuthContext)

    const changeToLoginRoute = () => {
        let path = '/login'
        window.location.href = path
    }

    const changeToSignUpRoute = () => {
        let path = '/signup'
        window.location.href = path
    }

    return (
        auth.loggedIn ?
            <Navbar>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button href='/' >
                            Home
                        </Button>
                        <Button onClick={auth.logout}>
                            Log Out
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            :
            <Navbar>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button onClick={changeToLoginRoute}>
                            Login
                        </Button>
                        <Button onClick={changeToSignUpRoute} >
                            Sign Up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default TopNav
