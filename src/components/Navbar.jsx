import { Bell, ShoppingCart, Search, CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logoutUser } from "../api/authApi.js";

import { useState, useEffect } from "react";


import { getNotifications, markAllNotificationsRead } from "../api/notificationApi.js"

import { getCurrentUser } from "../api/authApi.js";



const Navbar = () => {

    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const [notifications, setNotifications] =
        useState([]);

    const [showNotifications,
        setShowNotifications] =
        useState(false);

    const navigate = useNavigate();

    // Fetch current user on component mount
    useEffect(() => {

        const fetchCurrentUser = async () => {
            try {

                const res = await getCurrentUser();

                setUser(res.data.data.user);

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

    useEffect(() => {

        const fetchNotifications =
            async () => {

                try {

                    const res =
                        await getNotifications();

                    setNotifications(
                        res.data.data.notifications
                    );

                } catch (error) {
                    // toast.error("Failed to load Notfication!")
                }

            };

        fetchNotifications();

    }, []);

    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.isRead
        ).length;

    const handleNotificationClick = async () => {

        setShowNotifications(!showNotifications);

        try {

            await markAllNotificationsRead();

            setNotifications((prev) =>
                prev.map((notification) => ({
                    ...notification,
                    isRead: true
                }))
            );

        } catch (error) {
            // console.log(error);

        }

    };


    return (

        <nav className="bg-(--secondary-color) text-white p-6 flex flex-wrap items-center lg:justify-between gap-2 ">


            {/* Logo */}
            <div className='text-center flex justify-center items-center order-1'>
                <Link to="/" className="text-3xl font-bold">OmniCart</Link>
            </div>



            {/* Search Bar */}
            <div className='order-3 w-full mt-3 lg:order-2 lg:w-auto lg:mt-0'>
                <SearchBar />
            </div>


            <div className="flex items-center justify-center gap-6 order-2 lg:order-3 ml-auto lg:ml-0">

                {/* Notification and Cart Icons */}
                <div className="flex items-center gap-5">
                    <div className="relative">

                        <Bell
                            size={34}
                            className="cursor-pointer"
                            onClick={handleNotificationClick}
                        />

                        {unreadCount > 0 && (

                            <span
                                className="
                                          absolute -top-2 -right-2 rounded-full  bg-red-500   text-white  rounded-fulltext-xs w-5  h-5  flex items-center justify-center"
                            >
                                {unreadCount}
                            </span>
                        )}
                        {
                            showNotifications && (

                                <div className="absolute w-80 -right-28 lg:w-96 lg:right-2 lg:left-auto top-12 bg-white shadow-lg rounded-lg border z-50 text-black ">

                                    <div className="p-3 border-b font-bold">
                                        Notifications
                                    </div>

                                    <div className="max-h-96 overflow-y-auto scrollbar-none">

                                        {notifications.length === 0 ? (

                                            <p className="p-4 text-gray-500 text-center">
                                                No Notifications
                                            </p>

                                        ) : (

                                            notifications
                                                .slice(0, 5)
                                                .map((notification) => (

                                                    <div
                                                        key={notification._id}
                                                        className={`p-3 border-b hover:bg-gray-50 cursor-pointer
                            ${!notification.isRead
                                                                ? "bg-blue-50"
                                                                : ""
                                                            }`}
                                                    >

                                                        <h3 className="font-semibold">
                                                            {notification.title}
                                                        </h3>

                                                        <p className="text-sm text-gray-600">
                                                            {notification.message}
                                                        </p>

                                                        <p className="text-xs text-gray-400 mt-1">
                                                            {new Date(
                                                                notification.createdAt
                                                            ).toLocaleString()}
                                                        </p>

                                                    </div>

                                                ))

                                        )}

                                    </div>

                                </div>

                            )
                        }

                    </div>
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

                        <div className="absolute right-0 top-11 bg-white rounded-lg shadow-lg w-52 p-2 z-50">

                            {user ? (

                                <>
                                    <div className="px-3 py-2 border-b text-black">
                                        <p className="font-semibold text-(--accent-color) capitalize">
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
                                        className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded border-b"
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
                                        <button className="w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded border-b">
                                            Login
                                        </button>
                                    </Link>
                                </>

                            )}

                            <div>
                                <Link to="/seller-page">
                                    <button className='w-full text-left px-3 py-2  text-black hover:bg-(--accent-color) hover:text-white rounded'>Seller Page</button>
                                </Link>
                            </div>

                        </div>

                    )}

                </div>
            </div>

        </nav>
    )
}

export default Navbar