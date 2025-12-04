import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AdminLoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    function submit() {
        axios.post('/api/admin/login', { userName, password })
            .then(response => {
                console.log('Admin login successful:', response.data);
                navigate('/admin');
            })
            .catch(error => {
                console.error('Admin login failed:', error);
                setError('Login failed. Please check your credentials and try again.');
            });
    }

    return (
        <div className="max-w-2xl mx-auto min-w-[600px] py-30">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-700">
                <h1 className="text-5xl font-bold mb-6 text-white">Admin Login</h1>
                
                {error && <p className="text-xl md:text-2xl text-red-500 font-light mb-8">{error}</p>}

                <form className="space-y-6">
                    <div>
                        <label className="block text-slate-300 mb-2" htmlFor="username">Username</label>
                        <input
                            className="w-full p-3 rounded-lg bg-slate-700 border text-white focus:outline-none focus:border-blue-500"
                            type="text"
                            name="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-slate-300 mb-2" htmlFor="password">Password</label>
                        <input
                            className="w-full p-3 rounded-lg bg-slate-700 border text-white focus:outline-none focus:border-blue-500"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button onClick={(e) => { e.preventDefault(); submit(); }} className="mt-5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer py-3 px-6 transition-all duration-200 font-semibold shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60 hover:scale-105 transform" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLoginPage;