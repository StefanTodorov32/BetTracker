import { Link, redirect } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";

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
                <SignedOut>
                    <div className="text-lg font-semibold hover:underline">
                        <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <Link
                        className="text-lg font-semibold hover:underline"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <Link
                        className="text-lg font-semibold hover:underline"
                        to="/profile"
                    >
                        Profile
                    </Link>
                    <div className="text-lg font-semibold hover:underline">
                        <SignOutButton
                            signOutCallback={() => {
                                redirect("/");
                            }}
                        />
                    </div>
                </SignedIn>
                <ModeToggle />
            </nav>
        </nav>
    );
};
