import { NavLink } from "react-router-dom";

function NavBar({ pages }) {
    return (
        <nav className="bg-linear-120 from-blue-700 to-blue-900 p-4 text-white flex flex-row space-x-3 py-3 px-6 shadow-lg justify-end fixed top-0 left-0 w-full z-10">
            <NavLink to="/" className="mr-4 hover:underline hover:decoration-dotted decoration-dotted justify-self-start grow flex items-center gap-2 transition-all duration-300 hover:text-blue-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
            </NavLink>

            {pages.map(({ path, title }) => {
                return (
                    <NavLink to={path} className="mr-4 hover:underline hover:decoration-dotted decoration-dotted transition-all duration-300 hover:text-blue-300">
                        {title}
                    </NavLink>
                )
            })}
        </nav>
    );
};

export default NavBar;