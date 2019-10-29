import React, { useEffect, useState } from "react";
import {
    Form,
    Col,
    InputGroup,
    Button,
    Container,
} from "react-bootstrap";

import { useParams } from 'react-router-dom'

export default function CandidatePage() {
    const { id } = useParams();
    console.log('IdURL', { id });
    const [candidate, setCandidate] = useState({});

    //--Mouting---
    const getCandidate = async () => {
        const url = `http://localhost:3001/candidates/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setCandidate(data);
    }
    useEffect(() => getCandidate(), []);
    console.log('Info of candidate GET', candidate);

    const editCandidate = async () => {
        const url = `http://localhost:3001/candidates/${id}`;
        console.log(candidate,"cadida input")
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(candidate)
            }
        );
        console.log('Response:',  response)
    }

    //--Validate-----
    const [validated, setValidated] = useState(false);
    const handleSubmit = async event => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        editCandidate() ;
    };
    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder='First name'
                            defaultValue={candidate.first_name}
                            onChange={(e)=>{setCandidate({...candidate,first_name:e.target.value})}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue={candidate.last_name}
                            onChange={(e)=>{setCandidate({...candidate,last_name:e.target.value})}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                defaultValue={candidate.email}
                                onChange={(e)=>{setCandidate({...candidate,email:e.target.value})}}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required defaultValue={candidate.city} onChange={(e)=>{setCandidate({...candidate,city:e.target.value})}} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Gender" required onChange={(e)=>{setCandidate({...candidate,gender:e.target.value})}} defaultValue={candidate.gender} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid gender.
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Job title</Form.Label>
                        <Form.Control type="text" placeholder="Job title" required onChange={(e)=>{setCandidate({...candidate,job_title:e.target.value})}} defaultValue={candidate.job_title} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid job title.
          </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    )
}
