

import About from '../Pages/About';
import Home from '../Pages/Home';
import Reviews from '../Pages/Reviews';
import Login from '../Authentication/Login';
import Blogs from './../Pages/Blogs';

export const publicRoute = [

    { path: '/', name: 'Home', Component: Home },
    { path: '/home', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/review', name: 'Reviews', Component: Reviews },
    { path: '/blogs', name: 'Blogs', Component: Blogs },
    { path: '/login', name: 'Login', Component: Login },
];