import { addToCart } from "../api/cartApi";
import { toast } from "react-hot-toast";
import { getCurrentUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const useAddToCart = () => {
    const navigate = useNavigate();

    const handleAddToCart = async (productId, quantity = 1) => {
        try {
            // CHECK USER FROM BACKEND
            const userRes = await getCurrentUser();

            if (!userRes?.data?.data) {
                toast.error("Please login to add items to cart");
                navigate("/login");
                return;
            }

            await addToCart(productId, quantity);

            toast.success("Added To Cart");

        } catch (error) {
            console.log(error);

            // If token expired / unauthorized
            if (error.response?.status === 401) {
                toast.error("Please login to continue");
                navigate("/login");
                return;
            }

            toast.error(
                error.response?.data?.message || "Failed To Add"
            );
        }
    };

    return handleAddToCart;
};