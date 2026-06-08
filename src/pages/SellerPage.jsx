import HeroBanner from "../components/HeroBanner.jsx"
import Navbar from "../components/Navbar.jsx"
import QACards from "../components/QACards.jsx"

// Icons
import { Lock, ChartNoAxesCombined, ChartNoAxesColumnIncreasing, Package } from 'lucide-react'


// Hero Banner
import SellerBanner from "../assets/Seller-Dashboard-homepage-banner.png"

const SellerPage = () => {

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

        </>
    )
}

export default SellerPage