import React from 'react';
import { Outlet } from 'react-router-dom';
import AllUsers from './AllUsers';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {

    return (
        <>
            <DashboardSidebar>
                <Outlet />
                {/* <AllUsers></AllUsers> */}
            </DashboardSidebar>
        </>
    );
};

export default Dashboard;