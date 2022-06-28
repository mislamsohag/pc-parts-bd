import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../Assets/Background.png';
import Footer from '../Componants/Footer';

const BussinessSummary = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mighty-tor-21117.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const productsSclce = products.slice(3, 6)
    // console.log(productsSclce);


    const icons = [
        { 'id': '1', 'image': 'https://i.ibb.co/GFsGW36/icon-1.jpg', 'math': 80, 'description': 'Countries We are connect' },
        { 'id': '2', 'image': 'https://i.ibb.co/hBKQqWr/icon-4.png', 'math': 250, 'description': 'Complet Projects' },
        { 'id': '3', 'image': 'https://i.ibb.co/9bjWnKs/icon-2.jpg', 'math': 5000, 'description': 'Happy Clients' },
        { 'id': '4', 'image': 'https://i.ibb.co/T0bwzy0/icon-3.png', 'math': 300, 'description': 'Feedback' },
    ]

    return (
        <>
            <div style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}>
                <h1 className='text-3xl hotext-center text-center font-serif py-5'>Business Connectivty</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-20 py-10'>

                    {
                        icons.map(icon => <>
                            <div key={icon.id} className="card w-96">
                                <figure className="px-10 pt-10">
                                    <div className='grid-cols-3'>
                                        <img className="mask mask-circle h-20 w-20" src={icon.image} />
                                    </div>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h5 className='text-3xl font-bold text-secondary'>{icon.math}+</h5>
                                    <h6 className='text-xl text-primary'>{icon.description}</h6>
                                </div>
                            </div>
                        </>)
                    }

                </div>
            </div>

            <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-gray-200 mb-5 shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-secondary font-bold font-serif'>Find Our Product</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>

                    {
                        productsSclce?.map(p => <>
                            <div key={p._id}>
                                <div className="card card-compact w-50 bg-base-100 shadow-xl">
                                    <figure><img src={p.image} alt="image" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{p.name}</h2>
                                        <p>{p.details}</p>
                                        <div className="card-actions justify-center">
                                            <Link to="/products" className="btn btn-ghost text-blue-600">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
                <Link to="/products" className='btn btn-xs mt-5'>See More...</Link>
            </div>

            <Footer></Footer>
        </>
    );
};

export default BussinessSummary;