import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Feature from '../Feature/Feature';
import gif from '../../../images/preview.gif'
import './Features.css'

const Features = () => {
    const [features, setFeatures] = useState([]);
    const { isLoading } = useAuth();



    useEffect(() => {

        fetch('https://stark-tundra-60468.herokuapp.com/features')
            .then(res => res.json())
            .then(data => setFeatures(data))

    },
        []);
    if (isLoading) {
        return <img src={gif} alt="" />
    }


    return (
        <div id='features' className='container'>
            <h1 className='my-5'>Search offers and find best for you</h1>
            <h2>We promise,it won’t get boring.</h2>
           

                <div className='features-section'>
                    {
                        features.map(feature => <Feature
                            key={feature._id}
                            feature={feature}
                        ></Feature>)
                    }
                </div>
            

        </div>
    );
};

export default Features;