import React from 'react';
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import Loading from '../../Sheard/Loading';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const RequireAdmin = () => {

    const [admin] = useAdmin();// এটা সাময়িক সময়ের জন্য তৈরি
    const location = useLocation();

    // const [admin, loading] = useAuthState(auth);
    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return <Outlet />;
};

export default RequireAdmin;