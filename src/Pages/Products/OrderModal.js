import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const OrderModal = ({ orderModal, setOrderModal }) => {
    const { _id, description, origin, price, quantity, image, name } = orderModal;

    // console.log(orderModal);

    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            userName: user.displayName,
            userEmail: user.email,
            phone: event.target.phone.value,
            address: event.target.comment.value,
            productName: name,
            _id,
            image,
            quantity,
            description,
            origin,
            price,
        }
        console.log(order);

        fetch('https://mighty-tor-21117.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order) //মূলত এই বডিকেই সার্ভার থেকে রিসিভ করবে
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`hello ${user.displayName}. Thanks for choising Our Product`)
                }
                else {
                    toast.error('Opps! Yor Order are not Plased. try again Please')
                }
                setOrderModal(null);
            });
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

                        <p
                            name='description'
                            className="text-white text-center">{description}
                        </p>
                        <p
                            name='price'
                            className=" text-center text-secondary">Price: {price}
                        </p>
                        <p
                            name='quantity'
                            className="text-white text-center">Pakege: {quantity} /Pic
                        </p>
                        <p
                            name='origin'
                            className="text-secondary text-center">Product : {origin}
                        </p>


                        <input
                            required
                            name='phone'
                            type="number"
                            placeholder="Mobile Number"
                            className="input input-bordered w-full max-w-xs" />

                        <textarea
                            required
                            name='address'
                            type="text"
                            placeholder="Type Delivery Address"
                            className="textarea textarea-bordered w-full max-w-xs">
                        </textarea>

                        <input
                            type="submit"
                            value='Order Place'
                            className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;