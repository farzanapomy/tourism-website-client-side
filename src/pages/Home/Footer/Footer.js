import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/logo (3).JPG';
import './Footer.css'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faClock} />

    return (
        <div>
            <div className="container px-4 bg-dark text-light my-5 p-5">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border  border-0">
                            <img className='bg-light text-light w-50' src={logo} alt="" />
                            <p>
                                Being a full-time psychologist, I make my patients feel special so they can discuss their problems openly. My goal is to help people fighting their fears and pfe issues.
                            </p>

                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3 border  text-style border-0">
                            <h6>Contact Details</h6>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i className="fab fa-facebook"></i></p>
                                <p>1870 Alpaca Way Irvine, Chittagong 92614.Bangladesh</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i className="fas fa-phone"></i></p>
                                <p>Phone: +1 921 124 9220,Mail: info@psychare.com</p>

                            </div>
                            <div className='d-flex justify-content-center align-items-center m-2'>
                                <p>{element}</p>
                                <p>Mon - Fri: ( 9am - 6pm )</p>
                                <p>Sat & Sun: CLOSED</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 border border-0  ">
                            <h6>Book Tickets</h6>
                            <p>Hotel Reservation: +1-202-555-0145</p>
                            <p>Contact us now for a quote about consultation ( Available 24/7 )</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer-text '>© 2021 - Copyright by Farzana Pomy</p>
        </div>
    );
};

export default Footer;