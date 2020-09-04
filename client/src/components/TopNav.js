import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const TopNav = ({ loggedIn, setLoggedIn }) => {

    const changeToLoginRoute = () => {
        let path = '/login'
        window.location.href = path
    }

    const changeToSignUpRoute = () => {
        let path = '/signup'
        window.location.href = path
    }

    const handleLogout = () => {
        setLoggedIn(false)
        localStorage.setItem('current_user', "")
        localStorage.setItem('current_session', false)
    }



    return (
        loggedIn ?
            <Navbar>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
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
