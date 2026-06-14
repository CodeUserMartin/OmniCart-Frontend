import { addToCart } from "../api/cartApi";

import { toast } from "react-hot-toast"

export const useAddToCart = () => {

    const handleAddToCart = async (productId, quantity) => {

        try {

            await addToCart(productId, quantity = 1);

            toast.success(
                "Added To Cart"
            );

        } catch (error) {

            toast.error(
                "Failed To Add"
            );

        }

    };

    return handleAddToCart;
};