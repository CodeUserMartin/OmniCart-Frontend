import ResultProductCard from "../../components/ResultProductCard.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import { useState } from "react";
// Icons
import { ChevronDown, ChevronUp } from "lucide-react";

const ReStockProducts = () => {

    const [showOutOfStock, setShowOutOfStock] = useState(false);


    return (
        <>
            <div className="flex flex-col gap-3">

                {/* Dropdown Header */}
                <div
                    onClick={() => setShowOutOfStock(!showOutOfStock)}
                    className="flex items-center justify-between gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer"
                >
                    <h1 className="font-bold text-3xl text-white">
                        Out of Stock Products
                    </h1>

                    {
                        showOutOfStock
                            ? <ChevronUp color="white" />
                            : <ChevronDown color="white" />
                    }
                </div>

                {/* Out Of Stock Product List */}
                {
                    showOutOfStock && (
                        <div className="flex flex-col gap-4 overflow-y-auto h-50">

                            <ResultProductCard />
                            <ResultProductCard />
                            <ResultProductCard />
                            <ResultProductCard />
                            <ResultProductCard />
                            <ResultProductCard />

                        </div>
                    )
                }

                {/* Search Bar */}
                <div className="p-3">
                    <SearchBar />
                </div>

                {/* Search Results */}
                <div className="flex flex-col gap-4 overflow-y-auto h-50">

                    <ResultProductCard />
                    <ResultProductCard />
                    <ResultProductCard />

                </div>

            </div>

        </>
    )
}

export default ReStockProducts