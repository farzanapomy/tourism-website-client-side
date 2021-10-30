import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);

    return (
        <div id='features'>
            <h2>Search offers and find best for you</h2>
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