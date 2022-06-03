import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Componants/Loading';
import User from './User';


const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://mighty-tor-21117.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl text-center mb-3">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;