import React from 'react';
import { Link } from 'react-router-dom';
// import useAdmin from '../Hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    // const [admin] = useAdmin();
    return (
        <div className="drawer drawer-mobile bg-accent">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay">
                </label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/addAdmin">Add Admin</Link></li>
                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;