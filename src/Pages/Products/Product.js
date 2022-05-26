import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(product);
    const { image, name, description, origin, price, quantity } = product;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between gap-2'>
                        <p className='btn btn-outline btn-sm'>Price: Tk {price}</p>
                        <p className='btn btn-outline btn-sm'>Q. : {quantity}

                            <select className='btn btn-ghost btn-sm' id="Pakege">
                                <option value="1">Pac: 1</option>
                                <option value="2">Pac: 2</option>
                                <option value="3">Pac: 3</option>
                            </select>
                        </p>
                        <p className='btn btn-outline btn-sm'>{origin}</p>
                    </div>

                    <Link to={'/buy'} className="btn btn-primary">Order</Link>

                </div>
            </div>
        </div>
    );
};

export default Product;