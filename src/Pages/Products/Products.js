import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        //এটা পুরাতন নিয়ম fetch এর পরিবর্তে 
        axios.get('http://localhost:5000/product').then(res => setProducts(res));

    }, []);



    return (
        <div>
            <h2 className="text-3xl">All Products</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={products.image} alt="Shoes" className="rounded-xl" />
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

export default Products;