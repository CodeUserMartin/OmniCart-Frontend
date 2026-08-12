import HeroBanner from "../components/HeroBanner.jsx"
import Navbar from "../components/Navbar.jsx"
import QACards from "../components/QACards.jsx"

import { Link, } from "react-router-dom"
import toast from "react-hot-toast"

import { useNavigate } from "react-router-dom"

// Icons
import { Lock, ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Package } from 'lucide-react'

import { useEffect, useState } from "react"
import { getCurrentUser, becomeSeller } from "../api/authApi.js"


// Hero Banner
import SellerBanner from "../assets/Seller-Dashboard-homepage-banner.png"
import Footer from "../components/Footer.jsx"

const SellerPage = () => {

    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [submitFormLoading, setSubmitFormLoading] = useState(false);

    const [SellerFormData, setSellerFormData] = useState({
        storeName: "",
        contactNumber: "",
        addressLine: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        addressProof: null
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setSellerFormData({
            ...SellerFormData,
            [name]: value
        });

    };

    useEffect(() => {

        const fetchCurrentUser = async () => {

            try {

                const response = await getCurrentUser();

                setUser(response.data.data.user);
            } catch (error) {

                setUser(null);

            }

        };

        fetchCurrentUser();

    }, []);

    const validateSellerForm = () => {

        const newErrors = {};

        // Store Name
        if (!SellerFormData.storeName.trim()) {
            newErrors.storeName = "Store name is required.";
        } else if (SellerFormData.storeName.trim().length < 3) {
            newErrors.storeName = "Store name must be at least 3 characters.";
        }

        // Contact Number
        if (!SellerFormData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required.";
        } else if (!/^\d{10}$/.test(SellerFormData.contactNumber)) {
            newErrors.contactNumber =
                "Enter a valid 10-digit  mobile number.";
        }

        // Address
        if (!SellerFormData.addressLine.trim()) {
            newErrors.addressLine = "Store address is required.";
        }

        // City
        if (!SellerFormData.city.trim()) {
            newErrors.city = "City is required.";
        }

        // State
        if (!SellerFormData.state.trim()) {
            newErrors.state = "State is required.";
        }

        // Country
        if (!SellerFormData.country.trim()) {
            newErrors.country = "Country is required.";
        }

        // Pin Code
        if (!SellerFormData.pincode.trim()) {
            newErrors.pincode = "Zip code is required.";
        } else if (!/^\d{6}$/.test(SellerFormData.pincode)) {
            newErrors.pincode = "Zip code must be exactly 6 digits.";
        }

        // Address Proof
        if (!SellerFormData.addressProof) {
            newErrors.addressProof = "Address proof is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }


    const handleSellerApplication = async (e) => {

        e.preventDefault();

        // Stop submission if validation fails
        if (!validateSellerForm()) {
            return;
        }

        try {

            setSubmitFormLoading(true);

            const formData = new FormData();

            formData.append(
                "storeName",
                SellerFormData.storeName.trim()
            );

            formData.append(
                "contactNumber",
                SellerFormData.contactNumber.trim()
            );

            formData.append(
                "addressLine",
                SellerFormData.addressLine.trim()
            );

            formData.append(
                "city",
                SellerFormData.city.trim()
            );

            formData.append(
                "state",
                SellerFormData.state.trim()
            );

            formData.append(
                "country",
                SellerFormData.country.trim()
            );

            formData.append(
                "pincode",
                SellerFormData.pincode.trim()
            );

            formData.append(
                "addressProof",
                SellerFormData.addressProof
            );

            const response =
                await becomeSeller(formData);

            toast.success(
                response.data.message ||
                "Seller Registration Successful!"
            );

            navigate("/seller-dashboard/dashboard")

        }
        catch (error) {

            console.log(error);
            toast.error(
                error.response?.data?.message ||
                "Something went wrong!"
            );

        } finally {
            setSubmitFormLoading(false);
        }

    };


    const cardsData = [
        {
            icon: <Lock />,
            title: "Secure Payment",
            description: "Provide your customers with safe and reliable transactions through a secure payment system designed to build trust."
        },
        {
            icon: <ChartNoAxesCombined />,
            title: "Grow Faster",
            description: "Reach a wider audience, increase product visibility, and expand your business with more selling opportunities."
        },
        {
            icon: <ChartNoAxesColumnIncreasing />,
            title: "Powerful Analytics",
            description: "Track sales, monitor performance, and gain valuable insights to make smarter business decisions."
        },
        {
            icon: <Package />,
            title: "Easy Product Management",
            description: "Add, update, and organize your products effortlessly with simple and intuitive management tools."
        }
    ];

    return (
        <>

            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <HeroBanner img={SellerBanner} />

            {/* Hero Text */}
            <div className="m-5 text-center">
                <h1 className="font-bold text-2xl lg:text-4xl uppercase">Why Sell on OmniCart</h1>
            </div>

            {/* Cards */}
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {cardsData.map((card, index) => (
                    <QACards
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}

            </div>

            {/* Application Form  */}
            <div>

                <div>
                    <h1 className="font-bold text-2xl lg:text-4xl uppercase text-center">Apply to Become a Seller</h1>
                </div>

                {/* Container */}
                <div className="flex items-center justify-center mt-5">

                    {
                        user?.role === "seller" ?

                            (

                                <div className="w-100 lg:w-4xl p-7 border rounded-lg shadow-(--box-shadow) mt-5 text-center">

                                    <h2 className="text-3xl font-bold text-green-600">
                                        You are already a seller!
                                    </h2>

                                    <p className="mt-3 text-gray-600">
                                        Your seller account is active and ready to sell on OmniCart.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => navigate("/seller-dashboard/dashboard")}
                                        className="mt-5 bg-(--accent-color) text-white px-6 py-3 rounded-md hover:cursor-pointer hover:bg-red-800"
                                    >
                                        Open Seller Dashboard
                                    </button>

                                </div>

                            ) : (

                                <form
                                    onSubmit={handleSellerApplication}
                                    className="w-lg lg:w-4xl p-7 border rounded-lg shadow-(--box-shadow) mt-5 "
                                >

                                    {!isLoggedIn && (
                                        <div className="mb-4">
                                            <p className="text-red-500 font-semibold">
                                                Please login or sign up to become a seller.
                                            </p>

                                            <div className="flex gap-3 mt-2">
                                                <Link
                                                    to="/login"
                                                    className="px-4 py-2 bg-black text-white rounded"
                                                >
                                                    Login
                                                </Link>

                                                <Link
                                                    to="/signup"
                                                    className="px-4 py-2 bg-(--accent-color) text-white rounded"
                                                >
                                                    Sign Up
                                                </Link>
                                            </div>
                                        </div>
                                    )}

                                    <fieldset disabled={!isLoggedIn}
                                        className={!isLoggedIn ? "opacity-50" : ""}
                                    >

                                        <div className="flex flex-col lg:flex-row gap-5 lg:w-full">

                                            <div>

                                                {/* Store Name */}
                                                <div className="flex flex-col gap-2 w-full">
                                                    <label htmlFor="storeName" className="font-medium">
                                                        Store Name
                                                    </label>
                                                    <input type="text" name="storeName"
                                                        required
                                                        value={SellerFormData.storeName}
                                                        onChange={handleInputChange}
                                                        id="storeName" className="shadow-(--box-shadow) rounded-md p-2"
                                                    />

                                                    {errors.storeName && (
                                                        <p className="text-red-500 text-sm">
                                                            {errors.storeName}
                                                        </p>
                                                    )}
                                                </div>



                                                {/* Contact Information */}
                                                <div className="flex flex-col gap-2 mt-5">
                                                    <label htmlFor="contactNumber" className="font-medium">
                                                        Contact Information
                                                    </label>
                                                    <input type="text" name="contactNumber"
                                                        required
                                                        value={SellerFormData.contactNumber}
                                                        onChange={handleInputChange}
                                                        id="contactNumber" className="shadow-(--box-shadow) rounded-md p-2" />

                                                    {errors.contactNumber && (
                                                        <p className="text-red-500 text-sm">
                                                            {errors.contactNumber}
                                                        </p>
                                                    )}
                                                </div>

                                            </div>

                                            <div className="flex flex-col gap-5 lg:w-full">

                                                {/* Store Address */}
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="addressLine" className="font-medium">
                                                        Store Address
                                                    </label>
                                                    <textarea
                                                        required
                                                        name="addressLine"
                                                        id="addressLine"
                                                        rows="5"
                                                        className="shadow-(--box-shadow) rounded-md p-2"
                                                        value={SellerFormData.addressLine}
                                                        onChange={handleInputChange}
                                                    />

                                                    {errors.addressLine && (
                                                        <p className="text-red-500 text-sm">
                                                            {errors.addressLine}
                                                        </p>
                                                    )}
                                                </div>

                                            </div>

                                        </div>

                                        {/* Store Address Container */}
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-5">

                                            {/* City */}
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="city" className="font-medium">
                                                    City
                                                </label>
                                                <input required type="text" name="city" id="city" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.city} onChange={handleInputChange} />

                                                {errors.city && (
                                                    <p className="text-red-500 text-sm">
                                                        {errors.city}
                                                    </p>
                                                )}
                                            </div>

                                            {/* State */}
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="state" className="font-medium">
                                                    State
                                                </label>
                                                <input required type="text" name="state" id="state" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.state} onChange={handleInputChange} />

                                                {errors.state && (
                                                    <p className="text-red-500 text-sm">
                                                        {errors.state}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Country */}
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="country" className="font-medium">
                                                    Country
                                                </label>
                                                <input required type="text" name="country" id="country" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.country} onChange={handleInputChange} />

                                                {errors.country && (
                                                    <p className="text-red-500 text-sm">
                                                        {errors.country}
                                                    </p>
                                                )}
                                            </div>

                                            {/* pin Code */}
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="pincode" className="font-medium">
                                                    Zip Code
                                                </label>
                                                <input required type="text" name="pincode" id="pincode" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.pinCode} onChange={handleInputChange} />

                                                {errors.pincode && (
                                                    <p className="text-red-500 text-sm">
                                                        {errors.pincode}
                                                    </p>
                                                )}
                                            </div>

                                        </div>

                                        {/* Address Proof */}
                                        <div className="flex flex-col gap-2 mt-5">
                                            <label htmlFor="addressProof" className="font-medium">
                                                Address Proof
                                            </label>
                                            <input required type="file" name="addressProof" id="addressProof" className="shadow-(--box-shadow) rounded-md p-2" onChange={(e) => {

                                                setSellerFormData({
                                                    ...SellerFormData,
                                                    addressProof: e.target.files?.[0] || null
                                                });

                                                // Clear error when user selects a file
                                                if (e.target.files?.[0]) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        addressProof: ""
                                                    }));
                                                }
                                            }} />

                                            {errors.addressProof && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.addressProof}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="mt-5">
                                            <button type="submit"
                                                disabled={!isLoggedIn}
                                                className="bg-(--accent-color-2) w-full text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-900">
                                                {submitFormLoading ? 'Processing..' : 'Submit Application'}
                                            </button>
                                        </div>


                                    </fieldset>

                                </form>

                            )
                    }






                </div>

            </div>

            <div className="mt-10">
                <Footer />
            </div>

        </>
    )
}

export default SellerPage