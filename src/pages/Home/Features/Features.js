import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Features = () => {
    const [fretures, setFeatures] = useState([]);

    useEffect(() => {
        fetch('/features.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, []);

    return (
        <div id='features'>

            <h2>this is features </h2>
        </div>
    );
};

export default Features;