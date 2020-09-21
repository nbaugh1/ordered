import React, { useState, useContext } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const history = useHistory()

    return (
        <Container>
            <Form onSubmit={(e) => login(e, email, password, history)}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </Container>
    )
}

export default Login