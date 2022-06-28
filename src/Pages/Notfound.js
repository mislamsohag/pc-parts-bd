import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-center'>
      <div className='row vh-50 my-5'>
        <div className='col-sm-12 col-md-6 col-lg-4 gap-3'>
          <h1 className='text-3xl font-extrabold text-red-600'>
            Error! 404
          </h1>
          <h1 className='font-mono'>
            Ooops! You weren't supposed to de this looking for isn't here.
          </h1>
          <p className='font-mono'>
            the page you're looking for no longer exists. Return to the home page and remember: you haven't see any things
          </p>
          <div className='flex justify-evenly gap-3 m-5'>
            <Link
              to='/'
              className='btn btn-info text-black '
            >
              Back to home
            </Link>
            <Link
              to='/about'
              className=' btn btn-secondary text-white px-5'
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 mx-auto col-lg-8'>
          <div className='rounded flex justify-center items-center'>
            <img className='img-fluid'
              src='https://i.ibb.co/c6ww58q/404-image.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
