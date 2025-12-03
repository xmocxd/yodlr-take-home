import { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // get user list
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto min-w-10/12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-700">
                <h1 className="text-5xl font-bold mb-6 text-white">Admin Page</h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light mb-8">
                    View and Modify User Accounts
                </p>
                <p className="text-lg mb-8 font-bold text-blue-300">Registered Users:</p>
                <p className="text-lg text-slate-300">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-slate-600 pb-2 text-left">ID</th>
                                <th className="border-b border-slate-600 pb-2 text-left">First Name</th>
                                <th className="border-b border-slate-600 pb-2 text-left">Last Name</th>
                                <th className="border-b border-slate-600 pb-2 text-left">Email</th>
                                <th className="border-b border-slate-600 pb-2 text-left">Status</th>
                                <th className="border-b border-slate-600 pb-2 text-left">Deactivate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-slate-700">
                                    <td className="border-b border-slate-600 py-2">{user.id}</td>
                                    <td className="border-b border-slate-600 py-2">{user.firstName}</td>
                                    <td className="border-b border-slate-600 py-2">{user.lastName}</td>
                                    <td className="border-b border-slate-600 py-2">{user.email}</td>
                                    <td className={`border-b border-slate-600 py-2
                                        ${
                                            user.state === 'active' ? 'text-green-400' :
                                            user.state === 'pending' ? 'text-amber-400' : 'text-red-400'
                                        }
                                        `}>{user.state}</td>
                                    <td className="border-b border-slate-600 py-2">
                                        {user.state === 'active' ? (
                                            <button className="rounded-full bg-red-600 text-white hover:bg-red-700 active:bg-red-800 cursor-pointer p-2 transition-all duration-200 hover:scale-110 transform" title="Deactivate">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        ) : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </p>
            </div>
        </div>
    );
}

export default AdminPage;