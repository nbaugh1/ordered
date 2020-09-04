import React from 'react'
import Container from 'react-bootstrap/Container'
import TopNav from './TopNav'

const Layout = ({ loggedIn, setLoggedIn, children }) => {
    return (
        <Container>
            <TopNav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></TopNav>
            {children}

        </Container>
    )
}

export default Layout
