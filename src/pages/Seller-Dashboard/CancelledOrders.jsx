import ResultProductCard from "../../components/ResultProductCard.jsx";

const CancelledOrders = () => {
    return (
        <>
            <div className="bg-(--accent-color-2) p-4 rounded-xl w-full h-full">

                    
                    {/* Title */}
                    <h1 className="font-bold text-3xl text-white" >Cancelled Orders</h1>

                    {/* Products */}s
                    <div className="flex flex-col gap-4 mt-3 overflow-auto h-152.5 p-3">

                        {/* Product Wrapper */}
                        <ResultProductCard />
                        <ResultProductCard />
                        <ResultProductCard />
                        <ResultProductCard />
                        <ResultProductCard />
                        <ResultProductCard />

                    </div>


            </div>
        </>
    );
};

export default CancelledOrders;