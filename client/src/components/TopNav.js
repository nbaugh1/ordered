import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../contexts/AuthContext'

const TopNav = ({ loggedIn }) => {

    const context = useContext(AuthContext)

    const changeToLoginRoute = () => {
        let path = '/login'
        window.location.href = path
    }

    const changeToSignUpRoute = () => {
        let path = '/signup'
        window.location.href = path
    }
    const handleLogout = () => {
        localStorage.setItem('current_user', "")
        localStorage.setItem('current_session', false)
        context.setIsAuth(loggedIn)
        console.log(context)
    }

    return (
        loggedIn ?
            <Navbar>
                <Navbar.Brand href="/">Hi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button href='/' >
                            Home
                        </Button>
                        <Button onClick={handleLogout}>
                            Log Out
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            :
            <Navbar>
                <Navbar.Brand href="/">Hi</Navbar.Brand>
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
