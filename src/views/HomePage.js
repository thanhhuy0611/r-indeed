import React, { useState } from "react";
import { Button,Form, Container  } from "react-bootstrap";
//import Router
import { useHistory } from 'react-router-dom';
//import Redux
import { useDispatch } from 'react-redux'

export default function HomePage(props) {
    //Intitailize
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    //Mounting
    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push('/candidates')
        dispatch({
            type: 'SIGN_IN',
            payload: {email,password}
        })
    }

    return (
        <Container className="loginBoard">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" placeholder="Enter email" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" placeholder="Password" 
                        onChange={(e)=>setPassword(e.target.value)}    
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}