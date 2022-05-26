import React from 'react';


const ReviewModal = ({ reviewModal, setReviewModal }) => {
    const { image, name, description, origin, price, quantity } = reviewModal;

    const handleReview = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const rat = event.target.rating.value;
        console.log(phone, rat);
        setReviewModal(null);
    };
    return (
        <div>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-secondary text-lg">Rating for : {name}</h3>

                    <form onSubmit={handleReview} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>

                        <input
                            name='name'
                            type="text"
                            value=''
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            name='email'
                            type="email"
                            value=''
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            name='phone'
                            type="number"
                            placeholder="Mobile Number"
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            name='comment'
                            type="text"
                            placeholder="Type your comment"
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            name='rating'
                            type="text"
                            placeholder="Type your rating 1 to 5"
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            type="submit"
                            value='submit'
                            className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ReviewModal;