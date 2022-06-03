// import { json } from 'express';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { axios } from 'axios';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '465767eb44e72bf0bd8233b09b8fb694';

    const onSubmit = async (data) => {
        const image = data.image[0]; //এখানে image কাজ করে কিন্তু img কাজ করেনা।
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;

                    const product = {
                        image: img,
                        productName: data.pName,
                        productPrice: data.price,
                        productDetails: data.details,
                        productQuantity: data.quantity,
                    }
                    // console.log(product)

                    //Send Data to Database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Products added successfully')
                                reset();
                            }
                        })
                }
            })
    }


    return (
        <div className='bg-accent h-screen'>
            <h3 className="font-bold text-center text-secondary text-lg">Product Add Fns</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>

                <input
                    type="text"
                    className='input input-bproducted w-full max-w-xs'
                    placeholder='Product name'
                    autoComplete='off'

                    {...register('pName', {
                        required: {
                            value: true,
                            message: 'Product Name is Required'
                        }
                    }
                    )} />

                <textarea
                    className='input input-bproducted w-full max-w-xs'
                    type="text"
                    placeholder='Type product details'
                    autoComplete='off'
                    {...register('details', {
                        required: {
                            value: true,
                            message: 'Product Details is Required'
                        }
                    })}
                ></textarea>

                <input
                    className='input input-bproducted w-full max-w-xs'
                    type="text"
                    placeholder='Add price'
                    autoComplete='off'
                    required
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Product Price'
                        }
                    })} />

                <input
                    className='input input-bproducted w-full max-w-xs'
                    type="text"
                    placeholder='Add quantity'
                    autoComplete='off'
                    required
                    {...register("quantity", {
                        required: { value: true, message: 'Product Quantity' }
                    })} />

                <input
                    className='w-full max-w-xs'
                    type="file"
                    required {...register('image')} />

                <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add product" />
            </form>
        </div>

    );
};

export default AddProduct;