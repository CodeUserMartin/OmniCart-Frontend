import { Bell, ShoppingCart, Search, CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logoutUser } from "../api/authApi.js";

import { useState, useEffect } from "react";

import { getCurrentUser } from "../api/authApi.js";



const Navbar = () => {

    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const navigate = useNavigate();

    // Fetch current user on component mount
    useEffect(() => {

        const fetchCurrentUser = async () => {
            try {

                const res = await getCurrentUser();

                setUser(res.data.data.user);
                console.log("Current user:", res.data.data.user);

            } catch (error) {

                setUser(null);

            }
        };

        fetchCurrentUser();

    }, []);


    // Logout Handler
    const handleLogout = async () => {

        try {
            await logoutUser();
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed");
        }
    };



    return (

        <nav className="bg-(--secondary-color) text-white p-6 flex items-center justify-between">

            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold">OmniCart</Link>
            </div>

            {/* Search Bar */}
            <SearchBar />

            <div>
                <Link to="/seller-page">
                    <button className='bg-(--accent-color) px-7 py-2 rounded-lg'>Seller Page</button>
                </Link>
            </div>


            <div className="flex items-center gap-6">

                {/* Notification and Cart Icons */}
                <div className="flex items-center gap-4">
                    <Link to="/notifications">
                        <Bell size={34} />
                    </Link>
                    <Link
                        to="/cart">
                        <ShoppingCart size={34} />
                    </Link>
                </div>


                <div
                    className="relative flex items-center cursor-pointer"
                    onMouseEnter={() => setShowUserMenu(true)}
                    onMouseLeave={() => setShowUserMenu(false)}
                >

                    <CircleUserRound size={34} />

                    {showUserMenu && (

                        <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg w-48 p-2 z-50">

                            {user ? (

                                <>
                                    <div className="px-3 py-2 border-b text-black">
                                        <p className="font-semibold text-(--accent-color)">
                                            {user.firstName} {user.lastName}
                                        </p>
                                    </div>

                                    <Link to="/orders">
                                        <button className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded">
                                            My Orders
                                        </button>
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded"
                                    >
                                        Logout
                                    </button>
                                </>

                            ) : (

                                <>
                                    <Link to="/signup">
                                        <button className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded">
                                            Sign Up
                                        </button>
                                    </Link>

                                    <Link to="/login">
                                        <button className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded">
                                            Login
                                        </button>
                                    </Link>
                                </>

                            )}

                        </div>

                    )}

                </div>
            </div>

        </nav>
    )
}

export default Navbar