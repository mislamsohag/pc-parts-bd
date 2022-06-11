import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    const [admin] = useAdmin();
    return (
        <div className="drawer drawer-mobile bg-accent">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col mx-12 my-5">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay">
                </label>
                <ul className="menu p-2 overflow-y-auto w-60 bg-base-200 text-secondary font-thin font-serif gap-2">
                    {/* <!-- Sidebar content here --> */}

                    {/* এডমিন হলেই কেবল ঢুকতে পারবে অন্যথায় নয় */}
                    <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                    <li><NavLink to="/dashboard/manage-products">Manage Products</NavLink></li>
                    <li><NavLink to="/dashboard/my-product">My Products</NavLink></li>
                    <li><NavLink to="/dashboard/my-orders">My Orders</NavLink></li>
                    <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
                    <li><NavLink to="allusers">All Users</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;