import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"

// Hero Banner Image
import ElectronicBanner from "../assets/Electronics-Tech-banner.png"
import CategoryCard from "../components/CategoryCard.jsx"


// Category Images
import LaptopImg from "../assets/Electronics-category-imgs/Laptop-img.jfif"
import SmartphoneImg from "../assets/Electronics-category-imgs/Smartphone-img.jfif"
import HeadphonesImg from "../assets/Electronics-category-imgs/Headphone-img.jfif"
import SmartWatchImg from "../assets/Electronics-category-imgs/SmartWatch-img.jfif"
import SpeakersImg from "../assets/Electronics-category-imgs/Speaker-img.jfif"

const Electronics = () => {

    const categories = [
        { name: "Laptops", img: LaptopImg },
        { name: "Smartphones", img: SmartphoneImg },
        { name: "Headphones", img: HeadphonesImg },
        { name: "Smart Watches", img: SmartWatchImg },
        { name: "Speakers", img: SpeakersImg },
    ]

    return (
        <>
            <Navbar />
            <HeroBanner img={ElectronicBanner} size="23" />
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} name={category.name} img={category.img} />
                ))}
            </div>
        </>
    )

}

export default Electronics