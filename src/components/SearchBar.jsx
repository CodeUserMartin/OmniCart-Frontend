import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center gap-2 px-2 rounded-md bg-white w-full max-w-md">
                <div><Search color='black' size={24} /></div>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-1 py-2 rounded-md text-black focus:outline-none w-full"
                />
            </div>
    )
}

export default SearchBar