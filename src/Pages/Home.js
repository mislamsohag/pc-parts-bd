import React from 'react';
import Slider from '../Componants/Slider';
import Footer from '../Componants/Footer';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
        </div>
    );
};

export default Home;