import React from 'react';
import Slider from '../Componants/Slider';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <Link to={'/buy'} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;