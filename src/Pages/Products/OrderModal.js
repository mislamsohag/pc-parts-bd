import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const OrderModal = ({ orderModal, setOrderModal }) => {
    const { _id, price, image, name } = orderModal;

    // console.log(orderModal);

    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            userEmail: user.email,
            img: image,
            product: name,
            productId: _id,
            user: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,

            productPrice: price,
        }
        // console.log(order);

        axios.post('https://mighty-tor-21117.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast(`hello ${user.displayName}. Thanks for choising Our Product`)
                    setOrderModal(null);
                } else {
                    toast.error('Opps! Yor Order are not Plased. try again Please')
                }
            })


    };

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-96 glass">

                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <figure>
                        <img src={image} alt={`image of ${name}`} />
                    </figure>

                    <h3 className="font-bold text-center text-secondary text-lg">Product Name : {name}</h3>

                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>

                        <input
                            className='input input-bordered w-full max-w-xs'
                            type="text"
                            value={user?.displayName}
                            name="name"
                            placeholder='name'
                            disabled />

                        <input
                            className='input input-bordered w-full max-w-xs'
                            type="email"
                            value={user?.email}
                            name="email"
                            disabled />

                        <textarea
                            className='input input-bordered w-full max-w-xs'
                            type="text"
                            name="address"
                            placeholder='Type your address'
                            autoComplete='off'
                            required ></textarea>


                        <input
                            className='input input-bordered w-full max-w-xs'
                            type="text"
                            name="phone"
                            placeholder='phone'
                            required />


                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
