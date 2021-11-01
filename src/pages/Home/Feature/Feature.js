import React from 'react';
import { Link } from 'react-router-dom';
import './Feature.css'

const Feature = ({ feature }) => {
    const { name, description, img, price ,_id} = feature;
    

    return (
        <>
            <div className='card-style '>
                <div className="card">
                    <div className="view overlay">
                        <img className="card-img-top img-fluid" src={img} alt="" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                   
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h4 className="card-title">Tour Price : ৳ {price}</h4>
                        <p className="card-text">{description}</p>
                        <Link to={`/features/${_id}`}> <button className="btn btn-primary">Purchase Now</button></Link>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Feature;