import React from 'react';

const Feature = ({ feature }) => {
    const { name, description } = feature;

    return (
        <div>
        
             
                    <h2>{name}</h2>
                    <p>{description}</p>
        </div>
    );
};

export default Feature;