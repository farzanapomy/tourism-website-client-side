import React from 'react';
import Faqs from '../../Faqs/Faqs';
import OurWinning from '../../OurWinning/OurWinning';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div id='home'>
          
            <Banner></Banner>
            <Features></Features>
            <OurWinning></OurWinning>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;