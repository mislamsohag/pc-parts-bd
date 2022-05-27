import React, { useEffect, useState } from 'react';
import Footer from '../../Componants/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/review?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setMyReview(data))
        }
    }, [user])

    // console.log(myReview);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Review</th>
                            <th>Ratting</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myReview.map((review, index) => <tr key={index}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="P. Image">
                                            <div className="mask mask-circle w-12 h-12">
                                                <img src={review.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {review.comment}
                                </td>
                                <td>{review.rating}</td>
                                <td><button className="btn btn-ghost btn-xs">Update</button></td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyReview;