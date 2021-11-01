import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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

                            <Nav.Link className='nav-menu' as={HashLink} to="/home#aboutUs">About Us</Nav.Link>
                            <Nav.Link className='nav-menu' as={HashLink} to="/home#faqs">FAQs</Nav.Link>

                            {user?.email &&
                                <NavDropdown className='nav-menu ' title="Manage Features" id="basic-nav-dropdown">

                                    <NavDropdown.Item href="#action/3.2">
                                        <Nav.Link as={HashLink} to="/addFeatures">Add Features</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        <Nav.Link as={HashLink} to="/manageOrders">Manage All Orders</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        <Nav.Link as={HashLink} to="/myOrders">My Orders</Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                            }
                            {user?.email ?
                                <Nav.Link as={HashLink} to="/home#features">
                                    <button onClick={logOut} className='btn btn-warning'>Sign Out</button>
                                </Nav.Link>

                                : <Nav.Link as={Link} to="/login" className='nav-menu'>Log In</Nav.Link>
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