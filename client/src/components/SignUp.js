import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', {
            user: {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        })
            .then(function (response) {
                console.log(response)
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
                <Form.Group controlId="formGroupPasswordConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={passwordConfirmation}
                        placeholder="Confirm Password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </Container>
    )
}

export default SignUp
