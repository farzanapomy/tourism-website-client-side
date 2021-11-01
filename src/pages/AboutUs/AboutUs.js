import React from 'react';
import img from '../../images/about.png'
const AboutUs = () => {
    return (
        <div id='aboutUs' className='container mb-3 bg-dark text-light p-5'>
            <h1 className='py-3'>Learn More About Our Company</h1>
            <div className="row row-col-12  my-4">
                <div className="col ">
                    <p>We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.

                        Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.</p>
                </div>
                <div className="col">
                    <img src={img} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;