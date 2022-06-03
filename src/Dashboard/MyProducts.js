import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from 'react';


const MyProducts = () => {

    const [user] = useAuthState(auth);
    const [myProduct, setMyProduct] = useState([]);
    const navigate = useNavigate()
    console.log(myProduct);
    useEffect(() => {
        if (user) {
            fetch(` https://mighty-tor-21117.herokuapp.com/my-products?userEmail=${user.email}`, {
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
                    setMyProduct(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2 className="text-secondary text-3xl font-serif text-center">My Products : {myProduct.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>

                {
                    myProduct?.map(p => <>
                        <div className="card lg:max-w-lg bg-base-200 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={p.image} alt="produt image" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{p.productName}</h2>
                                <p>{p.productDetails}</p>
                                <div className='flex justify-between gap-2'>
                                    <p className='btn btn-outline btn-sm'>Price: Tk {p.productPrice}</p>
                                    <p className='btn btn-outline btn-sm'>Q. : {p.productQuantity}

                                        <select className='btn btn-ghost btn-sm' id="Pakege">
                                            <option value="1">Pac: 1</option>
                                            <option value="2">Pac: 2</option>
                                            <option value="3">Pac: 3</option>
                                        </select>
                                    </p>

                                </div>

                                <div className='flex gap-5 mt-5'>

                                    <label
                                        htmlFor="order-modal"
                                        // onClick={() => setOrderModal(product)}
                                        className="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary"
                                    >Update</label>
                                    <label
                                        htmlFor="order-modal"
                                        // onClick={() => setOrderModal(product)}
                                        className="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary"
                                    >Delete</label>

                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default MyProducts;