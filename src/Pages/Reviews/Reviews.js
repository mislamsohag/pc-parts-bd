import React, { useEffect, useState } from 'react';
import Review from './Review';
import Loading from '../../Componants/Loading';
import { useQuery } from 'react-query'
import Footer from '../../Componants/Footer';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://mighty-tor-21117.herokuapp.com/reviews')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl text-secondary text-center font-serif mt-3">Total Reviews : {reviews.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 my-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;