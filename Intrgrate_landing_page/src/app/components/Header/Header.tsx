"use client";

// import components
import MenuNav from "../MenuNav/MenuNav";
import Link from "next/link";
import NavDrawer from "../NavDrawer/NavDrawer";

const Header = () => {

    return (
        <header className="bg-transparent w-full flex justify-center text-white p-4">
            <nav>
                <NavDrawer />
                <div className="nav__wrapper hidden md:block">
                    <ul className="flex gap-4">
                        <li>
                            <Link 
                                href="/"
                                className="text-sm md:text-lg font-bold uppercase nav-hover-bg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/login"
                                className="text-sm md:text-lg font-bold uppercase nav-hover-bg">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;