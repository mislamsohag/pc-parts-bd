import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products.data);

    useEffect(() => {
        //এটা পুরাতন নিয়ম, তার পূর্বের নিয়ম fetch
        axios.get('http://localhost:5000/product').then(res => setProducts(res));

        //এটা আপডেট নিয়ম যার মাধ্যমে জটিলতা কমে
        // (async () => {
        //     const res = await fetcher.get("/product");
        //     setProducts(res.data);
        // })();
    }, []);


    return (
        <div>
            <h2 className="text-3xl">All Products</h2>


        </div>
    );
};

export default Products;