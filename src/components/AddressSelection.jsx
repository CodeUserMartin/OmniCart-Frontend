import { useState } from "react";

export default function AddressSection({ addresses, selectedAddress, setSelectedAddress, setAddresses }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phone: ""
    });

    const currentAddress = addresses.find(
        (addr) => addr._id === selectedAddress
    );
    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ADD ADDRESS
    const handleAddAddress = () => {
        if (!formData.address.trim()) return;

        const newAddress = {
             _id: crypto.randomUUID(),
            ...formData
        };

        setAddresses((prev) => [...prev, newAddress]);
        setSelectedAddress(newAddress._id);

        setFormData({
            address: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            phone: ""
        });

        setIsModalOpen(false);
    };

    return (
        <div className="shadow-(--box-shadow) p-4 rounded-lg">

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-4">
                Select Delivery Address
            </h2>

            {/* EMPTY STATE */}
            {addresses.length === 0 ? (
                <div className="text-center py-6 bg-white rounded-lg border">
                    <p className="text-gray-500 mb-3">
                        No address found
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-blue-500 font-medium hover:underline"
                    >
                        + Add Address
                    </button>
                </div>
            ) : (
                <>
                    {/* ADDRESS LIST */}
                    <div className="space-y-3">
                        {addresses.map((addr) => {
                            const isSelected = selectedAddress === addr._id;

                            return (
                                <div
                                    key={addr._id}
                                    onClick={() => setSelectedAddress(addr._id)}
                                    className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer border transition
                                        ${isSelected
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-gray-200 bg-white"
                                        }
                                    `}
                                >
                                    {/* RADIO DOT */}
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                                        ${isSelected ? "border-blue-500" : "border-gray-400"}
                                    `}>
                                        {isSelected && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                    </div>

                                    {/* ADDRESS DISPLAY */}
                                    <div className="text-sm text-gray-800">
                                        <p className="font-semibold">
                                            {addr.address}
                                        </p>
                                        <p>
                                            {addr.city}, {addr.state}, {addr.country} - {addr.pincode}
                                        </p>
                                        <p>Phone: {addr.phone}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ADD NEW ADDRESS BUTTON */}
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-blue-500 hover:underline"
                        >
                            + Add New Address
                        </button>
                    </div>
                </>
            )}

            {/* DELIVERY PREVIEW */}
            {currentAddress && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">
                        Delivery Address:
                    </h2>

                    <div className="text-gray-800">
                        <p className="font-semibold">
                            {currentAddress.address}
                        </p>
                        <p>
                            {currentAddress.city}, {currentAddress.state}, {currentAddress.country} - {currentAddress.pincode}
                        </p>
                        <p>Phone: {currentAddress.phone}</p>
                    </div>
                </div>
            )}

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg">

                        <h2 className="text-xl font-bold mb-4">
                            Add New Address
                        </h2>

                        {/* ADDRESS */}
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Full Address"
                            className="w-full border p-3 rounded-lg mb-4 outline-none"
                        />

                        {/* GR_id */}
                        <div className="gr_id gr_id-cols-2 gap-3 mb-4">

                            <input
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="border p-2 rounded-lg outline-none"
                            />

                            <input
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                                className="border p-2 rounded-lg outline-none"
                            />

                            <input
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                className="border p-2 rounded-lg outline-none"
                            />

                            <input
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                placeholder="Pincode"
                                className="border p-2 rounded-lg outline-none"
                            />
                        </div>

                        {/* PHONE */}
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full border p-2 rounded-lg mb-4 outline-none"
                        />

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3">

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-gray-600"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleAddAddress}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                            >
                                Save Address
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}