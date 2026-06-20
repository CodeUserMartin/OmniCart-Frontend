import { useSellerProducts } from "../../hooks/useSellerProducts.js";
import SellerSearchBar from "../../components/SellerPageSearchBar.jsx";
import ResultProductCard from "../../components/ResultProductCard.jsx";

const MyProducts = () => {

    const {
        products,
        loading
    } = useSellerProducts();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1 className="font-bold text-3xl m-4 text-white">
                My Products
            </h1>

            <SellerSearchBar />

            <div className="flex flex-col gap-4 mt-3 overflow-auto h-130">

                {products.map((product) => (

                    <ResultProductCard
                        key={product._id}
                        name={product.name}
                        img={product.images[0]}
                        price={product.price}
                        stock={product.stock}
                        description={product.description}
                        category={product.category}
                    />

                ))}

            </div>
        </>
    );
};

export default MyProducts;