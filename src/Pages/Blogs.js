import React from 'react';
import Footer from './../Componants/Footer';

const Blogs = () => {
    return (
        <div>


            <div className='mx-20'>
                <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2 border' >
                    <h5 className='text-center font-bold text-2xl mb-3 underline'>How will you improve the performance of a React Application?</h5>


                    <p className='text-xl  text-justify'> 1. Having said that, reusing code can become a real challenge when dealing with large codebases or with different repositories, and that’s for two main reasons: 1. I often unaware of useful pieces of code. 2. The traditional way of sharing code across repositories is through packages, and that requires some heavy configurations.</p>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2 border'>
                    <h5 className='text-center font-bold text-2xl my-3 underline'>What are the different ways to manage a state in a React application?</h5>
                    <p className=' text-xl  text-justify'> Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.

                        There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.

                        We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure.
                    </p>

                </div>

                <div className='col-lg-6 col-sm-12 g-5 p-2 border'>
                    <h5 className='text-center font-bold text-2xl my-3 underline'>How does prototypical inheritance work?</h5>

                    <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                        <p className=' text-xl  text-justify'> This can be a tricky question, and you’ll probably need to defend your answer with follow-up Q&A, so pay special attention to learning the differences, and how to apply the knowledge to write better code.</p>
                        <br />
                        <p className=' text-xl  text-justify'>Class Inheritance: A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.</p>
                    </div>
                </div>
            </div>




            <Footer></Footer>
        </div>
    );
};

export default Blogs;