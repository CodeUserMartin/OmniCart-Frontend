import HeroBanner from "../components/HeroBanner.jsx"
import Navbar from "../components/Navbar.jsx"
import QACards from "../components/QACards.jsx"

import { Link } from "react-router-dom"
import toast from "react-hot-toast"

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

    const [SellerFormData, setSellerFormData] = useState({
        storeName: "",
        contactNumber: "",
        addressLine: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        addressProof: null
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        //  console.log(name, value);

        setSellerFormData({
            ...SellerFormData,
            [name]: value
        });

    };

    useEffect(() => {

        const fetchCurrentUser = async () => {

            try {

                const response = await getCurrentUser();

                setUser(response.data.data);

            } catch (error) {

                setUser(null);

            }

        };

        fetchCurrentUser();

    }, []);


    const handleSellerApplication = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append(
                "storeName",
                SellerFormData.storeName
            );

            formData.append(
                "contactNumber",
                SellerFormData.contactNumber
            );

            formData.append(
                "addressLine",
                SellerFormData.addressLine
            );

            formData.append(
                "city",
                SellerFormData.city
            );

            formData.append(
                "state",
                SellerFormData.state
            );

            formData.append(
                "country",
                SellerFormData.country
            );

            formData.append(
                "pinCode",
                SellerFormData.pinCode
            );

            formData.append(
                "addressProof",
                SellerFormData.addressProof
            );

            const response =
                await becomeSeller(formData);

            console.log(response.data);

            toast.success(
                response.data.message ||
                "Seller Registration Successful!"
            );

        }
        catch (error) {

            console.log(error);
            toast.error(
                error.response?.data?.message ||
                "Something went wrong!"
            );

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
                <h1 className="font-bold text-4xl uppercase">Why Sell on OmniCart</h1>
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
                    <h1 className="font-bold text-4xl uppercase text-center">Apply to Become a Seller</h1>
                </div>

                {/* Container */}
                <div className="flex items-center justify-center mt-5">

                    {/* Form */}
                    <form onSubmit={handleSellerApplication}
                        className="w-4xl p-7 border rounded-lg shadow-(--box-shadow) mt-5 ">

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
                            className={!isLoggedIn ? "opacity-50" : ""}>

                            <div className="flex gap-5">

                                <div>

                                    {/* Store Name */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="storeName" className="font-medium">
                                            Store Name
                                        </label>
                                        <input type="text" name="storeName"
                                            value={SellerFormData.storeName}
                                            onChange={handleInputChange}
                                            id="storeName" className="shadow-(--box-shadow) rounded-md p-2" />
                                    </div>

                                    {/* Contact Information */}
                                    <div className="flex flex-col gap-2 mt-5">
                                        <label htmlFor="contactNumber" className="font-medium">
                                            Contact Information
                                        </label>
                                        <input type="text" name="contactNumber"
                                            value={SellerFormData.contactNumber}
                                            onChange={handleInputChange}
                                            id="contactInfo" className="shadow-(--box-shadow) rounded-md p-2" />
                                    </div>

                                </div>

                                <div className="flex flex-col gap-5 w-full">

                                    {/* Store Address */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="addressLine" className="font-medium">
                                            Store Address
                                        </label>
                                        <textarea
                                            name="addressLine"
                                            id="addressLine"
                                            rows="5"
                                            className="shadow-(--box-shadow) rounded-md p-2"
                                            value={SellerFormData.addressLine}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Store Address Container */}
                            <div className="flex items-center gap-5 mt-5">

                                {/* City */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="city" className="font-medium">
                                        City
                                    </label>
                                    <input type="text" name="city" id="city" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.city} onChange={handleInputChange} />
                                </div>

                                {/* State */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="state" className="font-medium">
                                        State
                                    </label>
                                    <input type="text" name="state" id="state" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.state} onChange={handleInputChange} />
                                </div>

                                {/* Country */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="country" className="font-medium">
                                        Country
                                    </label>
                                    <input type="text" name="country" id="country" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.country} onChange={handleInputChange} />
                                </div>

                                {/* pin Code */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="pinCode" className="font-medium">
                                        Zip Code
                                    </label>
                                    <input type="text" name="pinCode" id="pinCode" className="shadow-(--box-shadow) rounded-md p-2" value={SellerFormData.pinCode} onChange={handleInputChange} />
                                </div>

                            </div>

                            {/* Address Proof */}
                            <div className="flex flex-col gap-2 mt-5">
                                <label htmlFor="addressProof" className="font-medium">
                                    Address Proof
                                </label>
                                <input type="file" name="addressProof" id="addressProof" className="shadow-(--box-shadow) rounded-md p-2" onChange={(e) => {
                                    console.log(e.target.files[0]);

                                    setSellerFormData({
                                        ...SellerFormData,
                                        addressProof: e.target.files[0]
                                    });
                                }} />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-5">
                                <button type="submit"
                                    disabled={!isLoggedIn}
                                    className="bg-(--accent-color-2) w-full text-white py-2 px-4 rounded-md">
                                    Submit Application
                                </button>
                            </div>


                        </fieldset>

                    </form>

                </div>

            </div>

            <div className="mt-10">
                <Footer />
            </div>

        </>
    )
}

export default SellerPage