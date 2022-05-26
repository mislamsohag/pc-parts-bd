import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import Loading from './../Componants/Loading';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);
    //useToken Hooks
    const [token] = useToken(gUser || user);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            Navigate(from, { replace: true })
        };
    }, [token, navigate, location])


    if (loading || gLoading) {
        return <Loading></Loading>
    }


    if (error || gError) {
        signInError = <p className='text-red-600 text-center'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    }

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center text-3xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    className="input input-bordered"

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
                            <input className='btn w-full max-w-xs' type="submit" value='Login' />
                        </form>

                        <p className='text-center'><small>New to PC Parts BD? <Link to='/signup' className='text-blue-600'>Please Sign Up First!</Link></small></p>

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

export default Login;