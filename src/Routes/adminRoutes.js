
import AddProduct from '../Dashboard/AddProduct';
import AllUsers from '../Dashboard/AllUsers';


export const adminRoutes = [

    { path: '/dashboard/allusers', name: 'AllUsers', Component: AllUsers },
    { path: '/dashboard/addProduct', name: 'AddProduct', Component: AddProduct },
];