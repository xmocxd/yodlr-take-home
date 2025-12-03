function SignUpPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-700">
                <h1 className="text-5xl font-bold mb-6 text-white">Sign Up</h1>
                <p className="text-lg text-slate-300 mb-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-slate-300 mb-2" htmlFor="email">Email</label>
                            <input className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500" type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2" htmlFor="firstName">First Name</label>
                            <input className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500" type="text" id="firstName" name="firstName" required />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2" htmlFor="lastName">Last Name</label>
                            <input className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500" type="text" id="lastName" name="lastName" required />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2" htmlFor="password">Password</label>
                            <input className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-500" type="password" id="password" name="password" required />
                        </div>
                        <button className="w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer py-3 px-6 transition-all duration-200 font-semibold shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60 hover:scale-105 transform" type="submit">
                            Create Account
                        </button>
                    </form>
                </p>
            </div>
        </div>
    );
}

export default SignUpPage;