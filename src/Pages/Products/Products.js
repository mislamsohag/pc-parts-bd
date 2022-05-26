import React, { useEffect, useState } from 'react';
import ReviewModal from '../Reviews/ReviewModal';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);

    const [reviewModal, setReviewModal] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setReviewModal={setReviewModal}
                    ></Product>)
                }
                {
                    reviewModal &&
                    <ReviewModal
                        reviewModal={reviewModal}
                        setReviewModal={setReviewModal}
                    >
                    </ReviewModal>
                }
            </div>
        </div>
    );
};

export default Products;