import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/authApi";
import { toast } from "react-hot-toast";

export const useBuyNow = () => {
    const navigate = useNavigate();

    const handleBuyNow = async (productId) => {
        try {
            const userRes = await getCurrentUser();

            if (!userRes?.data?.data) {
                toast.error("Please login to continue");
                navigate("/login");
                return;
            }

            // ✅ user is logged in → go to buy page
            navigate(`/buy-now/${productId}`);

        } catch (error) {
            console.log(error);

            toast.error("Please login to continue");
            navigate("/login");
        }
    };

    return handleBuyNow;
};