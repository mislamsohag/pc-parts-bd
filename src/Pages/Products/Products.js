import React, { useState } from 'react';
import ReviewModal from '../Reviews/ReviewModal';
import Product from './Product';
import Loading from '../../Componants/Loading';
import { useQuery } from 'react-query';
import OrderModal from './OrderModal';
import Footer from './../../Componants/Footer';





const Products = () => {

    const [reviewModal, setReviewModal] = useState([]);
    const [orderModal, setOrderModal] = useState([]);
    // console.log(reviewModal);
    // console.log(orderModal);

    const { data: products, isLoading } = useQuery('product', () => fetch('https://mighty-tor-21117.herokuapp.com/product')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setReviewModal={setReviewModal}
                        setOrderModal={setOrderModal}
                    ></Product>)
                }

                {/* Modal Open for Rating */}
                {
                    reviewModal &&
                    <ReviewModal
                        reviewModal={reviewModal}
                        setReviewModal={setReviewModal}
                    >
                    </ReviewModal>
                }

                {/* Modal Open for Order */}
                {
                    orderModal &&
                    <OrderModal
                        orderModal={orderModal}
                        setOrderModal={setOrderModal}
                    >
                    </OrderModal>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;