import React from 'react'
import Container from 'react-bootstrap/Container'
import TopNav from './TopNav'

const Layout = ({ children }) => {
    return (
        <Container>
            <TopNav></TopNav>
            {children}

        </Container>
    )
}

export default Layout
