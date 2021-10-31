import React from 'react';
import Faqs from '../../Faqs/Faqs';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div id='home'>
           <input type="name" />
            <Banner></Banner>
            <Features></Features>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;