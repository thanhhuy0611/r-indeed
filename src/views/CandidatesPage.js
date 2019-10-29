import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    ListGroup,
    Container,
    ListGroupItem,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function CandidatesPage() {
    // initalize
    const [candidates, setCandidates] = useState([]);

    //Mouting
    const getCandidates = async () => {
        const response = await fetch('http://localhost:3001/candidates');
        const data = await response.json();
        setCandidates(data);
    }
    useEffect(() => {
        getCandidates()
    }, [])

    const onDeleteCandidate = async(e,id) => {
        const url = `http://localhost:3001/candidates/${id}`;
        const config = {
            method: "DELETE",
            headers: {
                'Content-Type':'appllication/json',
            }
        };
        const response = await fetch(url,config);
        console.log('response',response);
        if(response.status === 200 ) {
            const currentCandidates = candidates.filter((el) => el.id !== id);
            setCandidates(currentCandidates);
        }
    }


    return (
        <Container fluid>
            <Row>
                {candidates.map(candidate =>
                    <Col  xs lg="3" key={candidate.id}>
                        <Card>
                            <Card.Img variant="top" src={candidate.photo_url} />
                            <Card.Body>
                                <Card.Title>
                                    {candidate.first_name + " " + candidate.last_name}
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{candidate.email}</ListGroupItem>
                                <ListGroupItem>{candidate.company}</ListGroupItem>
                                <ListGroupItem>{candidate.job_title}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button><Link className="card-link" to={`/candidates/${candidate.id}`}>Edit</Link></Button>
                                <Button variant="danger" onClick={(e) => onDeleteCandidate(e, candidate.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
