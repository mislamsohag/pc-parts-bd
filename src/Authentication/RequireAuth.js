import React from 'react';
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import Loading from '../../Sheard/Loading';

const RequireAuth = () => {
    // const [user, loading] = useAuthState(auth);

    const user = false;
    const location = useLocation();

    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return <Outlet />;
};

export default RequireAuth;