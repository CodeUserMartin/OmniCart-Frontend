import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {

        if (!searchQuery.trim()) return;

        if (location.pathname === "/") {
            navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
        } else {
            navigate(
                `${location.pathname}?search=${encodeURIComponent(searchQuery)}`
            );
        }

    }

    return (
        <div className="flex items-center justify-center gap-2 px-2 rounded-md bg-white w-full max-w-md">
            <div><Search color='black' size={24} className="cursor-pointer"
                onClick={handleSearch} /></div>
            <input
                type="text"
                placeholder="Search"
                className="px-1 py-2 rounded-md text-black focus:outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchBar