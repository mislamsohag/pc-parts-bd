
import MyReview from '../Pages/Reviews/MyReview';
import OrderModal from './../Pages/Products/OrderModal';


export const privateRoutes = [
    { path: 'order-modal', name: 'OrderModal', Component: OrderModal },
    { path: 'my-review', name: 'MyReview', Component: MyReview },
];