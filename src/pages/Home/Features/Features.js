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
            <h2>this is our features </h2>
            <div className='row'>

                    {
                        features.map(feature => <Feature
                            feature={feature}
                        ></Feature>)
                    }
            </div>
            <h2>{features.length}</h2>
        </div>
    );
};

export default Features;