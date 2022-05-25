
import AddAdmin from '../Dashboard/AddAdmin';
import AddProduct from '../Dashboard/AddProduct';


export const adminRoutes = [

    { path: '/dashboard/addAdmin', name: 'Dashboard', Component: AddAdmin },
    { path: '/dashboard/addProduct', name: 'Dashboard', Component: AddProduct },
];