import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.gurukulmantra.com/wp-content/uploads/2021/05/spoken-english-banner.png"
                    alt="First slide"
                />
                <Carousel.Caption className="mb-1">
                    <Button variant="danger">Register Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://thumbs.dreamstime.com/z/english-course-mobile-application-banner-set-study-foreign-languages-school-university-idea-global-communication-studying-183299625.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselHome;