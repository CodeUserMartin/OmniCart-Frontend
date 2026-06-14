import { Bell, ShoppingCart, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logoutUser } from "../api/authApi.js";

const Navbar = () => {

    const navigate = useNavigate();


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
            <SearchBar  />

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

            <div>
                <Link to="/seller-page">
                    <button className='bg-(--accent-color) px-5 py-2'>Seller Page</button>
                </Link>
            </div>

            <div>
                <Link to="/dashboard">
                    <button className='bg-(--accent-color) px-5 py-2'>Dashboard</button>
                </Link>
            </div>

            <div>
                <Link to="/signup">
                    <button className='bg-(--accent-color) px-5 py-2'>Sign Up</button>
                </Link>

                <Link to="/login">
                    <button className='bg-(--accent-color) px-5 py-2 ml-2'>Login</button>
                </Link>

                <Link to="/logout">
                    <button className='bg-(--accent-color) px-5 py-2 ml-2' onClick={handleLogout}>
                        Logout
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar