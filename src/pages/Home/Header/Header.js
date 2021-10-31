import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/logo (3).JPG'
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div className='mb-5 '>
                <Navbar sticky='top' className='nav-style' variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/home#home" className='nav-img' >
                            <img src={img} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end ">
                            <Nav.Link className='nav-menu' as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className='nav-menu' as={HashLink} to="/home#features">Features</Nav.Link>
                            <Nav.Link className='nav-menu' as={HashLink} to="/addFeatures">Add Features</Nav.Link>
                            <Nav.Link className='nav-menu' as={Link} to="">About Us</Nav.Link>
                            {user?.email ?
                                <button onClick={logOut}  >Sign Out</button>
                                : <Nav.Link as={Link} to="/login" className='nav-menu'>Log In</Nav.Link>
                            }
                            {user?.email &&
                               
                                <Nav.Link as={Link} to="/login" className='nav-menu'>Manage items</Nav.Link>
                            }

                            {user.email &&
                                <Navbar.Text>
                                    Hello <a href="#login"> {user?.displayName} </a>
                                </Navbar.Text>}
                            {user.email &&
                                <Navbar.Text>
                                    <img className='rounded-pill w-50' src={user?.photoURL} alt="" />
                                </Navbar.Text>}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;