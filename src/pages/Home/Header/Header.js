import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/logo (3).JPG'


const Header = () => {
    return (
        <div>


            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='bg-dark rounded sticky-top me-auto p-0 w-25 h-25'>
                        <img className='w-75 ' src={img} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/home#features">Features</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav>

                            Hello  <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;