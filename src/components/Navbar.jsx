import { Bell, ShoppingCart, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="bg-(--secondary-color) text-white p-6 flex items-center justify-between">

            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold">OmniCart</Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center justify-center gap-2 px-2 rounded-md bg-white w-full max-w-md">
                <div><Search color='black' size={24} /></div>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-1 py-2 rounded-md text-black focus:outline-none w-full"
                />
            </div>

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