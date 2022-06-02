import React from 'react';
import bg from '../Assets/Background.png';
// import icon_1 from '../Assets/icon_1.jpg';
import Footer from '../Componants/Footer';

const BussinessSummary = () => {

    const icons = [
        { 'image': 'https://i.ibb.co/GFsGW36/icon-1.jpg', 'math': 80, 'description': 'Countries We are connect' },
        { 'image': 'https://i.ibb.co/hBKQqWr/icon-4.png', 'math': 250, 'description': 'Complet Projects' },
        { 'image': 'https://i.ibb.co/9bjWnKs/icon-2.jpg', 'math': 50, 'description': 'Happy Clients' },
        { 'image': 'https://i.ibb.co/T0bwzy0/icon-3.png', 'math': 300, 'description': 'Feedback' },
    ]



    return (
        <>
            <div style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}>
                <h1 className='text-3xl hotext-center text-center font-serif py-5'>Bussness Connectivty</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-20 py-10'>

                    {
                        icons.map(icon => <>
                            <div class="card w-96">
                                <figure class="px-10 pt-10">
                                    <div className='grid-cols-3'>
                                        <img className="mask mask-circle h-20 w-20" src={icon.image} />
                                    </div>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h5 className='text-3xl font-bold text-secondary'>{icon.math}+</h5>
                                    <h6 className='text-xl text-primary'>{icon.description}</h6>
                                </div>

                            </div>
                        </>)
                    }

                </div>
            </div>

            <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-gray-200 mb-5 shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-secondary font-bold font-serif'>Find Our Product</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>

                    <h1>3টি প্রোডাক্ট শো হবে....</h1>
                </div>
                <button className='btn btn-xm mt-5'>See More...</button>
            </div>



            <Footer></Footer>
        </>
    );
};

export default BussinessSummary;