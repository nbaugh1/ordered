import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/UserContext'

const Login = ({ setLoggedIn, loggedIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const login = React.useContext(useAuth())
    debugger

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/login', {
            user: {
                email: email,
                password: password,
            },
        }, {
            withCredentials: true
        })
            .then(function (response) {
                console.log(response)
                setLoggedIn(response.data.loggedIn)
                localStorage.setItem('current_user', response.data.user)
                localStorage.setItem('current_session', response.data.loggedIn)
                history.push('/profile')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
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