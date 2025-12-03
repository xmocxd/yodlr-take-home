import BackHomeButton from "./BackHomeButton.jsx";

function NotFound() {
    return (
        <div className="max-w-2xl w-full text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-12 border border-slate-700">
                <h2 className="text-6xl font-bold text-white mb-4">404</h2>
                <h3 className="text-2xl font-semibold text-slate-300 mb-6">Page Not Found</h3>
                <p className="text-lg text-slate-400 mb-8">Sorry, the page you are looking for does not exist.</p>
                <BackHomeButton />
            </div>
        </div>
    );
}

export default NotFound;    