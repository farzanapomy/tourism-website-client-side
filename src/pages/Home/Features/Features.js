import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:5000/features')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);

    return (
        <div id='features' className='container'>
            <h1 className='my-5'>Search offers and find best for you</h1>
            <div className='row'>

                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        features.map(feature => <Feature
                            feature={feature}
                        ></Feature>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Features;