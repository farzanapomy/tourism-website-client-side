import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Feature from '../Feature/Feature';
import gif from '../../../images/preview.gif'

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
            <div className='row'>

                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        features.map(feature => <Feature
                            key={feature._id}
                            feature={feature}
                        ></Feature>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Features;