import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/img (1).jpg';
// import img2 from '../../../images/banner/img (2).jpg';
// import img3 from '../../../images/banner/img (3).jpg'

const Banner = () => {
    return (
        <div className='mx-2 '>
            <Carousel variant="dark" className='h-25 mx-auto'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>We are give you a best journey</h5>
                        <p>Your day can happier with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Banner;