import { useNavigate } from "react-router-dom";

import AuthBanner from "../../assets/Auth-page-banner.png";
import { toast } from "react-hot-toast";

import { useState } from "react";
import { signupUser } from "../../api/authApi";

import { Link } from "react-router-dom";

const SignUpPage = () => {

    const [isRegistered, setIsRegistered] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await signupUser(formData);

            toast.success(
                "Account Successfully Created!"
            );

            setIsRegistered(true);

        } catch (error) {
            const backendErrors = error.response?.data?.errors || [];

            const formattedErrors = {};

            backendErrors.forEach(err => {
                const field = Object.keys(err)[0];
                formattedErrors[field] = err[field];
            });

            setErrors(formattedErrors);
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    if (isRegistered) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">

                    <h2 className="text-2xl font-bold text-green-600">
                        Account Created Successfully
                    </h2>

                    <p className="mt-3 text-gray-600">
                        We have sent a verification email to your inbox.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Please verify your email to continue.
                    </p>

                    <div className="mt-6 text-blue-600 font-medium">
                        You can now close this page or check your email 📩
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-row items-center justify-center lg:h-screen bg-gray-100 p-3">

            {/* Sign Up Container */}
            <div className="flex flex-col w-full lg:flex-row shadow-(--box-shadow) rounded-lg overflow-hidden lg:w-4xl lg:h-[80vh]">

                {/* Left-side Banner */}
                <div className=" bg-gray-200">
                    <img src={AuthBanner} alt="Sign Up Banner"
                        loading="lazy" className="w-full h-110
                    object-cover
                    lg:h-full 
                    lg:object-contain" />
                </div>

                {/* Right-side Container */}
                <div className="p-8 flex flex-col justify-center">

                    {/* Sign Up Form */}
                    <div>

                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-(--accent-color) mb-2">
                            Create Account
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Join OmniCart and start shopping smarter.
                        </p>

                        <form onSubmit={handleSubmit}>

                            {/* First Name */}
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                                <input
                                    required
                                    type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}

                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.firstName}
                                </p>
                            )}

                            {/* Last Name */}
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                                <input
                                    required
                                    type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.lastName}
                                </p>
                            )}

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    required
                                    type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}

                            {/* Password */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input
                                    required
                                    type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}

                            {/* Link to Login Page */}
                            <div className="mt-4">
                                <p className="text-gray-500">Already have an account? <Link to="/login" className="text-(--accent-color) hover:underline">Login here</Link></p>
                            </div>

                            {/* Sign Up Button */}
                            <div className="mt-6">
                                <button type="submit" className="bg-(--accent-color) text-white py-2 px-4 rounded-md  focus:outline-none">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default SignUpPage;