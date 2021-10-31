import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleFeature = () => {
    const { id } = useParams();
    const [feature, setFeature] = useState([])


    useEffect(() => {
        const url = `git ${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFeature(data))
    }, []);
    return (
        <div>
            <h2>{feature.length}</h2>

        </div>
    );
};

export default SingleFeature;