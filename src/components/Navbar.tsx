import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="flex flex-row items-center h-16 px-16 shrink-0">
            <Link
                className="flex items-center gap-2 text-xl font-bold hover:underline"
                to="#"
            >
                Bet Tracker
            </Link>
            <nav className="ml-auto flex items-center space-x-4">
                <Link
                    aria-current="page"
                    className="text-lg font-semibold hover:underline"
                    to="/"
                >
                    Home
                </Link>
                <Link className="text-lg font-semibold hover:underline" to="/dashboard">
                    Dashboard
                </Link>
                <Link className="text-lg font-semibold hover:underline" to="/login">
                    Login
                </Link>
                <Link className="text-lg font-semibold hover:underline" to="#">
                    Logout
                </Link>
            </nav>
        </nav>
    );
};
