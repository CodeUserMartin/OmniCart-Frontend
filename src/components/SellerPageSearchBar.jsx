import { Search } from "lucide-react";

const SellerPageSearchBar = ({
    value,
    onChange,
    placeholder = "Search products..."
}) => {
    return (
        <>
            <Search />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded-lg px-4 py-3 bg-(--primary-color) text-blacks placeholder-gray-400 focus:outline-none"
            />
        </>
    );
};

export default SellerPageSearchBar;