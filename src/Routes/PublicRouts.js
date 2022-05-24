

import About from '../Pages/About';
import Home from '../Pages/Home';
import Reviews from '../Pages/Reviews';
import Blogs from '../Pages/Blogs';
import Login from '../Pages/Login';

export const publicRoute = [

    { path: '/', name: 'Home', Component: Home },
    { path: '/home', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/review', name: 'Reviews', Component: Reviews },
    { path: '/blogs', name: 'Blogs', Component: Blogs },
    { path: '/login', name: 'Login', Component: Login },
];