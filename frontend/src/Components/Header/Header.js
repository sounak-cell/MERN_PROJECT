import React from 'react';
import {
    Navbar,
    FormControl,
    Form,
    Button,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container >
                <Navbar.Brand >
                    <Link to= {"/"}>Note Zipper</Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='m-auto'>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        
                    </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >
                            <Link to={"./mynotes"}>My Notes</Link></Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <NavDropdown title="Sounak Sana" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header