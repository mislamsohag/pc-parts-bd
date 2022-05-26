import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const ReviewModal = ({ reviewModal, setReviewModal }) => {
    const { _id, image, name } = reviewModal;

    const [user, loading, error] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();

        const review = {
            productId: _id,
            productImg: image,
            productName: name,
            userName: user.displayName,
            userEmail: user.email,
            phone: event.target.phone.value,
            comment: event.target.comment.value,
            rating: event.target.rating.value
        }
        // console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review) //মূলত এই বডিকেই সার্ভার থেকে রিসিভ করবে
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Thanks for Giving Review`)
                }
                else {
                    toast.error('Opps! Yor Review are not send please try again')
                }
                setReviewModal(null);
            });
    };

    return (
        <div>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div class="w-16 rounded">
                        <img src={image} alt="product image" />
                    </div>
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-secondary text-lg">Rating for : {name}</h3>

                    <form onSubmit={handleReview} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>

                        <input
                            name='name'
                            type="text"
                            disabled value={user?.displayName}
                            className="input input-bordered w-full max-w-xs" />

                        <input
                            name='email'
                            type="email"
                            disabled value={user?.email}
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