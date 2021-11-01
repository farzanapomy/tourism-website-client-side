import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/footer.jpg'

import logo from '../../../images/logo (3).JPG';
import './Footer.css'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faClock} />

    return (
        <div>
            <div className="container px-4  text-light my-5 p-5" style={{ backgroundColor: '#344e41' }}>
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border  border-0">
                            <img className='bg-light text-light w-50 my-2' src={logo} alt="" />
                            <p>
                                TravelStore is the largest independently owned travel agency headquartered in California, and consistently ranked among the top 50 largest in the United States.
                            </p>

                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3 border  text-style border-0">
                            <h6>Tickets & Booking Information</h6>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i className="fab fa-facebook"></i></p>
                                <p>1870 Alpaca Way Irvine, Chittagong 92614,Bangladesh</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i className="fas fa-phone"></i></p>
                                <p>Phone: +1 921 124 9220,Mail: info@nextZen.com</p>

                            </div>
                            <p>Vacation Packages,Season Passes</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 border border-0  ">
                            <h6>Get in touch</h6>
                            <p>Hotel Reservation: +1-202-555-0145</p>
                            <p>Contact with us ( Available 24/7 )</p>
                            <img src={img} className='w-50 ' alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <p className='text-light p-4 fs-4' style={{ backgroundColor: '#344e41' }}>© 2022 - Copyright by Farzana Pomy</p>
        </div>
    );
};

export default Footer;