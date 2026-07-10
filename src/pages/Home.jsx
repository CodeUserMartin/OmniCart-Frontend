import Navbar from '../components/Navbar.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import HeroText from '../components/HeroText.jsx'
import CategoryOption from '../components/CategoryOption.jsx'
import Footer from '../components/Footer.jsx'

// Hero Banner Image
import HomeBanner from '../assets/OmniCart-Home-banner.png'

const Home = () => {

    return (
        <div className="bg-(--primary-color)">
            <Navbar />
            <HeroBanner img={HomeBanner} />
            <HeroText />

            <CategoryOption />

            <section className="max-w-7xl mx-auto mt-10">
                <div className="space-y-4">

                    <div className="flex items-center justify-between bg-gray-100 border shadow-sm p-4">
                        <h2 className="text-3xl font-bold">
                            🎮 Gaming & Tech
                        </h2>

                        <div className="flex gap-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeI9UNmsfKuql4WpxYPg2ZDNhvJ83Tuq2Smn-xk64nVQ&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVk_rrhbCyMwyxAxQT88UpQND3HfiFoS-2jUIbQBBAw&s" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV79M4Uefm_JJ8QXB7RLvyPZZEuaOxkHTkmkejpEGeg&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0gCNW8rDfZ9UdB0PR9_uFhBg0jbU_P-gfRPlcHF2Cw&s=10" className="w-20 h-14 object-cover" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-100 border shadow-sm p-4">
                        <h2 className="text-3xl font-bold">
                            👕 Fashion Finds
                        </h2>

                        <div className="flex gap-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGRpv8QP5qzTwFB6FZoHSw-idnvWcxWOStrqaZ5IgDw&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoYHqhKtmIHedz9zY7HVfQJQDXTvxImH4J3imW68cDA&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSG2z0S5MBSGfnbxgPGNcg9iDNVAefXVC6UEtu7K_DJw&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqxdpu0RRZ3glm75X447JhHB58lCmrY74Y-Auqu1t7Q&s=10" className="w-20 h-14 object-cover" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-100 border shadow-sm p-4">
                        <h2 className="text-3xl font-bold">
                            🛒 Daily Essentials
                        </h2>

                        <div className="flex gap-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPP6JwrErxYpj9RE0vN2Xu0vRZh5gMju75whY8ssf0g&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7p_iI3y3MuTeBVBfM5l9Z-kZe2Tg1U5Zeb5MP_nt8A&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq03MMoHqd3R_WAGxnGiBDFjftIE1kXbxOGMjWwtOKw&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUPiDcTNxTucesizgKod2dRqVrkSOZ6RrAoMuU99B4g&s=10" className="w-20 h-14 object-cover" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-100 border shadow-sm p-4">
                        <h2 className="text-3xl font-bold">
                            ✨ Beauty & Care
                        </h2>

                        <div className="flex gap-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4BCWUWH9M_zisM-lU_UMpJMe1fyTESuNyNoOvwxVCQ&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjbdUH3bYa6mTSN9PnbotiTEd9uATRpOERSSfv4O67w&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtPVHShiyUsLH72LGBvUYOYAdwc1yLPvBS6eU8eRSOA&s=10" className="w-20 h-14 object-cover" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvS-k9tcRuzvTeAD0MRn8OKQ8bDUsG58Ar70h3iYSVA&s=10" className="w-20 h-14 object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16">

                <h2 className="text-center text-5xl font-bold text-red-800 mb-12">
                    Why OmniCart
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl shadow-md border p-8 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-4">
                            🚚
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                            Fast Delivery
                        </h3>

                        <p className="text-gray-600">
                            Get products delivered quickly.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md border p-8 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-4">
                            🛍️
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                            Multiple Sellers
                        </h3>

                        <p className="text-gray-600">
                            Large variety of products.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md border p-8 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-4">
                            ⭐
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                            Quality Products
                        </h3>

                        <p className="text-gray-600">
                            Verified sellers and reviews.
                        </p>
                    </div>

                </div>

            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home