import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from './../Componants/Loading';


const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-600 text-center'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (token) {
        console.log(token)
        navigate('/home');
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log('Name Updated')
    }

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold uppercase">Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"

                                    {...register("name", {

                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"

                                    {...register("email", {

                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },

                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"

                                    {...register("password", {

                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characaters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>

                            {signInError}
                            <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
                        </form>

                        <p className='text-center'><small>Alrady Have an Account? <Link to='/login' className='text-blue-600'>Plese Login</Link></small></p>

                        <div className="divider">OR</div>
                        <div className="card-actions justify-center">
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;