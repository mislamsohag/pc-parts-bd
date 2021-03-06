import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {

    console.log(index)
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://mighty-tor-21117.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    //যদি ‍এডমিন হয় তাহলে এই ম্যাসেজ দিব
                    toast.success('Admin has created')
                }
            })
    }

    //user ডিলিট করার জন্য
    const handleDelete = () => {
        fetch(`https://mighty-tor-21117.herokuapp.com/userDelete/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    window.confirm("Are you sure delete this user?")
                    toast.success(`User is deleted.`)
                    refetch();
                }
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            {/* যদি সে এডমিন হয় তাহলে তাকে এই বাটন দেখানো হবে */}
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>

            {/* <td><button className="btn btn-xs">Delete User</button></td> */}

            <td><button onClick={() => handleDelete()} className="btn btn-xs">Delete User</button></td>
        </tr>
    );
};

export default User;