import { useState, useEffect } from "react";

import { getSellerProducts } from "../api/productApi";

export const useSellerProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response =
                    await getSellerProducts();

                setProducts(
                    response.data.data.products
                );
                // console.log(response.data.data.products);

            } catch (error) {

                // console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchProducts();

    }, []);

    return {
        products,
        setProducts,
        loading
    };
};