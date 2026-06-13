import SearchBar from "../../components/SearchBar.jsx";
import ResultProductCard from "../../components/ResultProductCard.jsx";
import { getSellerProducts } from "../../api/productApi"

import { useState, useEffect } from "react"

const MyProducts = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response =
                    await getSellerProducts();

                setProducts(response.data.data.products);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProducts();

    }, []);

    return (
        <>

            {/* <div className="bg-(--accent-color-2) p-4 rounded-xl w-full h-full flex flex-col justify-center"> */}

            {/* Title */}
            <h1 className="font-bold text-3xl m-4 text-white" >My Products</h1>

            {/* Search Bar */}
            <SearchBar />

            {/* Product List */}
            <div className="flex flex-col gap-4 mt-3 overflow-auto h-130">

                {
                    products.map((product) => (
                        <ResultProductCard
                            key={product._id}
                            name={product.name}
                            img={product.images[0]}
                            price={product.price}
                            stock={product.stock}
                            description={product.description}
                        />
                    ))
                }


            </div>

            {/* </div> */}


        </>
    );
};

export default MyProducts;