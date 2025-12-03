// REQUIREMENTS
// * Users should be able to register
// * Admin page should list all users
// * Design/layout of content

// * Admin page should have a password protected route
// * Users should get a confirmation email

// * Signup form validation
// * Automated testing

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import NotFound from "./components/NotFound.jsx";
import AdminPage from "./components/AdminPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

const pages = [
    { path: "signup/", title: "Sign Up" },
    { path: "admin/", title: "Admin" },
]

const router = createBrowserRouter([
    {
        element: (
            <>
                <NavBar pages={pages} />
                <Outlet />
            </>
        ),
        children: [
            { path: "/", element: <HomePage /> },
            { path: "admin/", element: <AdminPage /> },
            { path: "signup/", element: <SignUpPage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

function App ()
{
    
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
}

export default App;