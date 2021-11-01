import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Faqs from '../../Faqs/Faqs';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div id='home'>

            <Banner></Banner>
            <Features></Features>
            <AboutUs></AboutUs>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;