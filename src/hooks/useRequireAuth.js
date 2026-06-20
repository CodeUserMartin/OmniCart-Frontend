import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux"; // or context

export const useRequireAuth = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const requireAuth = (callback) => {
        if (!user) {
            toast.error("Please login to continue shopping");
            navigate("/login");
            return;
        }

        callback(); // run actual action
    };

    return requireAuth;
};