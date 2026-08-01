const Footer = () => {
    return (
        <footer className="bg-(--secondary-color) text-white py-5 px-4">


            {/* Wrapper: Logo, Description, Links*/}
            <div className="flex flex-col justify-between md:flex-row gap-8 md:gap-16">

                <div>

                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold">OmniCart</h2>
                    </div>

                    {/* Description */}
                    <div className="mt-4 py-2">
                        <p>
                            Your one-stop marketplace for groceries, fashion, electronics, beauty products, and everyday essentials. Shop everything in one place with one cart and one seamless experience.
                        </p>
                    </div>

                </div>


                {/* Links */}

                {/* Wrapper: Links */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">

                    {/* Quick Links */}
                    <div>
                        <p className="font-bold text-lg">Quick Links</p>
                        <ul className="flex flex-col gap-2 py-2">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Categories</li>
                            <li>Cart</li>
                            <li>Become a Seller</li>
                        </ul>
                    </div>

                    {/*Category Links */}
                    <div>
                        <p className="font-bold text-lg">Categories</p>
                        <ul className="flex flex-col gap-2 py-2">
                            <li>Groceries</li>
                            <li>Fashion</li>
                            <li>Electronics</li>
                            <li>Beauty and Care</li>
                        </ul>
                    </div>

                    {/* Seller Resources */}
                    <div>
                        <p className="font-bold text-lg">Seller Resources</p>
                        <ul className="flex flex-col gap-2 py-2">
                            <li>Become a Seller</li>
                            <li>Seller Portal</li>
                            <li>Seller Guidelines</li>
                            <li>Seller Support</li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Wrapper: Contact, Copyright, Social Media */}
            <div className="lg:flex lg:justify-between lg:items-end gap-8 md:gap-16 mt-8 ">

                {/* Contact Information */}
                <div className="mb-5 lg:mb-0">
                    <p className="font-bold text-xl lg:text-2xl py-2">Connect With Us:</p>
                    <p>Email:
                        <a href="mailto:support@omnicart.com">support@omnicart.com</a>
                    </p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 OmniCart Lane, Shopville, USA</p>
                </div>

                {/* Copyright */}
                <div className="mb-5 lg:mb-0">
                    <span>&copy; 2026 OmniCart. All rights reserved.</span>
                    <p>Shop Everything. One Cart. One System.</p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                    <div>LinkedIn</div>
                </div>

            </div>




        </footer>
    )
}

export default Footer