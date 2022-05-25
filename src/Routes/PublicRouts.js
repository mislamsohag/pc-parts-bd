

import About from '../Pages/About';
import Home from '../Pages/Home';
import Reviews from '../Pages/Reviews';
import Login from '../Authentication/Login';
import Blogs from './../Pages/Blogs';
import Products from '../Pages/Products/Products';

export const publicRoutes = [

    { path: '/', name: 'Home', Component: Home },
    { path: '/home', name: 'Home', Component: Home },
    { path: '/products', name: 'Products', Component: Products },
    { path: '/about', name: 'About', Component: About },
    { path: '/review', name: 'Reviews', Component: Reviews },
    { path: '/blogs', name: 'Blogs', Component: Blogs },
    { path: '/login', name: 'Login', Component: Login },
];