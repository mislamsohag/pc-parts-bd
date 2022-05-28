import React from 'react';
import auth from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Componants/Loading';
import useAdmin from '../Hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return <Outlet />;
};

export default RequireAdmin;