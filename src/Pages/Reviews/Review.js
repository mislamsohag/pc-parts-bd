import React from 'react';

const Review = ({ review }) => {
    // console.log(review);
    const { comment, phone, productName, rating, userEmail, userName } = review;
    return (
        <>
            <div className="card w-96 bg-red-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title">{productName}</h2>
                    <h3 className="text-xl">Rating by: {userName}</h3>
                    <h5 className="text-xl">Email: {userEmail}</h5>
                    <p>{comment}</p>
                    <p>Product Rating: {rating}</p>
                </div>
            </div>
        </>
    );
};

export default Review;