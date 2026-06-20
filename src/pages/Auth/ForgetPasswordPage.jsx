import { useState } from "react";
import { toast } from "react-hot-toast";

import { forgetPassword } from "../../api/authApi";

const ForgetPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await forgetPassword(email);

            toast.success(
                response.data.message
            );

            setEmail("");

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to send reset link"
            );

        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-md w-xl">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Forgot Password
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Enter your email address to receive a password reset link.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="border p-3 rounded-md"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-(--accent-color) text-white py-3 rounded-md"
                    >
                        {
                            loading
                                ? "Sending..."
                                : "Send Reset Link"
                        }
                    </button>

                </form>

            </div>

        </div>
    );
};

export default ForgetPasswordPage;