import React from 'react';
import Slider from '../Componants/Slider';
import { Link } from 'react-router-dom';
import Footer from '../Componants/Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h1 className="text-5xl">এখানে বিজনেস সামারী দেখাবো</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;