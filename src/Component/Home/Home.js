import React from 'react';
import CarouselHome from './CarouselHome';
import Description from './Description';
import TopServices from './TopServices';

const Home = () => {
    return (
        <div>
            <CarouselHome></CarouselHome>
            <div className='container mt-3'>
                <TopServices></TopServices>
            </div>
            <div className='container'>
                <Description></Description>
            </div>
        </div>
    );
};

export default Home;