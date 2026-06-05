import { Bell, ShoppingCart, Search } from 'lucide-react'

const Navbar = () => {
    return (

        <nav className="bg-(--secondary-color) text-white p-6 flex items-center justify-between">

            {/* Logo */}
            <div>
                <h2 className="text-2xl font-bold">OmniCart</h2>
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
                <div><Bell size={34} /></div>
                <div><ShoppingCart size={34} /></div>
            </div>
        </nav>
    )
}

export default Navbar