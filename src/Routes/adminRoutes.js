
import AddProduct from '../Dashboard/AddProduct';
import AllUsers from '../Dashboard/AllUsers';
import MyProducts from './../Dashboard/MyProducts';
import MyOrders from './../Dashboard/MyOrders';
import MyProfile from './../Dashboard/MyProfile';


export const adminRoutes = [

    { path: '/dashboard/allusers', name: 'AllUsers', Component: AllUsers },
    { path: '/dashboard/addProduct', name: 'AddProduct', Component: AddProduct },
    { path: '/dashboard/my-product', name: 'MyProducts', Component: MyProducts },
    { path: '/dashboard/my-orders', name: 'MyOrders', Component: MyOrders },
    { path: '/dashboard/my-profile', name: 'MyProfile', Component: MyProfile },

];