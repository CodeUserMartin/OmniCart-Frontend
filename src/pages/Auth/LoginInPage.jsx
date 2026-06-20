import AuthBanner from "../../assets/Auth-page-banner.png";
import { Link } from "react-router-dom";

import { toast } from "react-hot-toast";
import { useState } from "react";
import { loginUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const LoginInPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await loginUser(formData);

            toast.success(response.data.message || "Login successful");

            // Redirect to home page after successful login
            navigate("/");

        }
        catch (error) {
            const errorData = error.response?.data;

            if (errorData?.errors?.length > 0) {

                const firstError =
                    Object.values(errorData.errors[0])[0];

                toast.error(firstError);

            } else {

                toast.error(
                    errorData?.message || "Something went wrong"
                );

            }
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }



    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">

            {/* Login Up Container */}
            <div className="flex md:flex-row items-center justify-center shadow-(--box-shadow) rounded-lg overflow-hidden w-4xl h-[80vh]">

                {/* Left-side Container */}
                <div className="p-5 flex flex-col">

                    {/* Login In Form */}
                    <div>

                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-(--accent-color) mb-6">Welcome Back
                            <br></br>
                            Continue your shopping journey with OmniCart.</h2>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            {/* Link to Forgot Password Page */}
                            <div className="mt-4">
                                <Link to="/forgot-password" className="text-gray-500 hover:underline">
                                    Forgot your password?
                                </Link>
                            </div>

                            {/* Link to Sign Up Page */}
                            <div className="mt-4">
                                <p className="text-gray-500">Don't have an account? <Link to="/signup" className="text-(--accent-color) hover:underline">Sign up here</Link></p>
                            </div>

                            {/* Login Button */}
                            <div className="mt-6">
                                <button type="submit" className="bg-(--accent-color) text-white py-2 px-4 rounded-md  focus:outline-none">
                                    Login
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                {/* Right-side Banner */}
                <div className=" h-full bg-gray-200">
                    <img src={AuthBanner} alt="Sign Up Banner" className="w-full h-full object-contain" />
                </div>

            </div>

        </div >
    )
}

export default LoginInPage;