import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiClient } from "../api/axios";

const VerifyEmailPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const res = await apiClient.get(
                    `/auth/verify-email/${token}`
                );

                toast.success("Email verified successfully!");

                setTimeout(() => {
                    navigate("/login");
                }, 1500);

            } catch (error) {
                toast.error(
                    error.response?.data?.message ||
                    "Verification failed"
                );

                setTimeout(() => {
                    navigate("/signup");
                }, 1500);
            }
        };

        verifyEmail();
    }, [token, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">
                Verifying your email...
            </h1>
            <p className="text-gray-500 mt-2">
                Please wait while we verify your account
            </p>
        </div>
    );
};

export default VerifyEmailPage;