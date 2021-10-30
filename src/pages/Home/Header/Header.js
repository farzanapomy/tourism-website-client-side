import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/logo (3).JPG'
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar sticky='top' bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home#home" className='nav-img' >
                        <img src={img} alt="" />
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#mechanics">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant='light'>Sign Out</Button>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        }

                        {user.email &&
                            <Navbar.Text>
                                Hello <a href="#login"> {user?.displayName} </a>
                            </Navbar.Text>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;