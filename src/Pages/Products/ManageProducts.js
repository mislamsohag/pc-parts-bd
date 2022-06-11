import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Componants/Loading';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://mighty-tor-21117.herokuapp.com/manage-products', {
        headers: {
            authorization: `Bearer${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(products);

    return (
        <div>
            This is Manage Products : {products.length}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            products.map(product => <>
                                <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td >
                                        {product.details}
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.origin}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageProducts;