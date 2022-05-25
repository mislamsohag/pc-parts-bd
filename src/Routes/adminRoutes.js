
import AddAdmin from '../Dashboard/AddAdmin';
import AddProduct from '../Dashboard/AddProduct';
import Dashboard from '../Dashboard/Dashboard';

export const adminRoutes = [

    { path: '/dashboard', name: 'Dashboard', Component: Dashboard },
    { path: '/dashboard/addAdmin', name: 'Dashboard', Component: AddAdmin },
    { path: '/dashboard/addProduct', name: 'Dashboard', Component: AddProduct },
];