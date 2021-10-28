import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'


const NotFound = () => {
    return (
        <div>
            <img className='w-75' src={logo} alt="" />
            <br />
            <Link to='/home'>
                <button className='btn btn-warning '>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;