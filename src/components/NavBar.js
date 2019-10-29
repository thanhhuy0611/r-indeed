import React, {useState} from 'react'
import { Button,NavDropdown, Nav, Navbar, Form, FormControl } from 'react-bootstrap'; 
//Import router
import {Link} from "react-router-dom";
// import Redux
import { useSelector, useDispatch } from 'react-redux';


export default function NavBar() {
    const store = useSelector((store) => store);
    const isSignIn = store.isSignIn;
    const dispatch = useDispatch();
    console.log('store',store)
    //Mouting
    const handleClick = () =>{
        dispatch({
            type: "SIGN_OUT",
        })
        console.log('stateUpdated',store)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to={'/candidates'}>Home</Link></Nav.Link>
                        
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={'/candidates'}>Candidates</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={'/company'}>Company</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder={store.email} className="mr-sm-2" disabled/>
                        <Link className={"btn btn-outline-success"} to={'/'} onClick={()=>handleClick()}>
                            {isSignIn ? 'Sign out' : 'Sign in'}
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
