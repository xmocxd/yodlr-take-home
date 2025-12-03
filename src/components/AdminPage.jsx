
function AdminPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-700">
                    <h1 className="text-5xl font-bold mb-6 text-white">Admin Page</h1>
                    <p className="text-lg text-slate-300">
                        List of all registered users will be displayed here.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;