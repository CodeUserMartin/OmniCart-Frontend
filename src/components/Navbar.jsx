import { Bell, ShoppingCart, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'

const Navbar = () => {
    return (

        <nav className="bg-(--secondary-color) text-white p-6 flex items-center justify-between">

            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold">OmniCart</Link>
            </div>

            {/* Search Bar */}
            <SearchBar />

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
                <Link to="/seller-dashboard">
                    <button className='bg-(--accent-color) px-5 py-2'>Seller Dashboard</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar