import SearchBar from "../../components/SearchBar.jsx";
import ResultProductCard from "../../components/ResultProductCard.jsx";

const MyProducts = () => {
    return (
        <>

            {/* <div className="bg-(--accent-color-2) p-4 rounded-xl w-full h-full flex flex-col justify-center"> */}

                {/* Title */}
                <h1 className="font-bold text-3xl m-4 text-white" >My Products</h1>

                {/* Search Bar */}
                <SearchBar />

                {/* Product List */}
                <div className="flex flex-col gap-4 mt-3 overflow-auto h-130">

                    <ResultProductCard />
                    <ResultProductCard />
                    <ResultProductCard />
                    <ResultProductCard />
                    <ResultProductCard />
                    <ResultProductCard />

                </div>

            {/* </div> */}


        </>
    );
};

export default MyProducts;