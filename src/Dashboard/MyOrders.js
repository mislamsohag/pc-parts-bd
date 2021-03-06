import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    console.log(user);

    const [myOrder, setMyOrder] = useState([]);
    const navigate = useNavigate()
    // console.log(myOrder);
    useEffect(() => {
        if (user) {
            fetch(`https://mighty-tor-21117.herokuapp.com/my-orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrder(data);
                });
        }
    }, [user])


    return (
        <div>
            <h2 className='text-center my-3 text-xl'>My Orders : {myOrder.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cansel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myOrder.map((order, index) => <tr key={index}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="mask mask-circle w-20 h-20">
                                            <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.name}
                                </td>
                                <td>{order.price} Tk</td>
                                <td><button className="btn btn-ghost btn-xs">Update</button></td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;