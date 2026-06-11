import { useNavigate } from "react-router-dom";

import AuthBanner from "../../assets/Auth-page-banner.png";
import { toast } from "react-hot-toast";

import { useState } from "react";
import { signupUser } from "../../api/authApi";

import { Link } from "react-router-dom";

const SignUpPage = () => {

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

            // console.log("Signup successful:", response.data);
            toast.success(response.data.message || "Signup successful");

            // Redirect to login page after successful signup
            navigate("/login");

        }
        catch (error) {
            console.error("Signup failed:", error);
            toast.error(error.response?.data?.message || "Signup failed");
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

            {/* Sign Up Container */}
            <div className="flex md:flex-row shadow-(--box-shadow) rounded-lg overflow-hidden w-4xl h-[80vh]">

                {/* Left-side Banner */}
                <div className=" h-full bg-gray-200">
                    <img src={AuthBanner} alt="Sign Up Banner" className="w-full h-full object-contain" />
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

                            {/* Last Name */}
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                                <input
                                    required
                                    type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    required
                                    type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input
                                    required
                                    type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

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