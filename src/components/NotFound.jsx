import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 flex items-center justify-center">
            <div className="max-w-2xl w-full text-center">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-12 border border-slate-700">
                    <h2 className="text-6xl font-bold text-white mb-4">404</h2>
                    <h3 className="text-2xl font-semibold text-slate-300 mb-6">Page Not Found</h3>
                    <p className="text-lg text-slate-400 mb-8">Sorry, the page you are looking for does not exist.</p>
                    <Link to="/">
                        <button className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer py-3 px-6 transition-all duration-200 font-semibold shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60 hover:scale-105 transform inline-flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;    