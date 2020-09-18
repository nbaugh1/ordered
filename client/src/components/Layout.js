import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import TopNav from './TopNav'
import { AuthContext } from '../contexts/AuthContext'

const Layout = ({ children }) => {

    const context = useContext(AuthContext)

    return (
        <Container>
            <TopNav auth={context.isAuth}></TopNav>
            {children}
        </Container>
    )
}

export default Layout
