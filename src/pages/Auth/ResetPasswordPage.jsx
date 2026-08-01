import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-hot-toast";

import { resetPassword } from "../../api/authApi";

const ResetPasswordPage = () => {

    const { resetToken } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            formData.newPassword !==
            formData.confirmPassword
        ) {

            toast.error(
                "Passwords do not match"
            );

            return;
        }

        try {

            setLoading(true);

            const response =
                await resetPassword(
                    resetToken,
                    formData.newPassword
                );

            toast.success(
                response.data.message
            );

            navigate("/login");

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to reset password"
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Reset Password
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Enter your new password below.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="border p-3 rounded-md"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="border p-3 rounded-md"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-(--accent-color) text-white py-3 rounded-md"
                    >
                        {
                            loading
                                ? "Resetting..."
                                : "Reset Password"
                        }
                    </button>

                </form>

            </div>

        </div>
    );
};

export default ResetPasswordPage;