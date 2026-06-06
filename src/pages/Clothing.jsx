import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import CategoryCard from "../components/CategoryCard.jsx"

// Hero Banner Image
import ClothingBanner from "../assets/Clothing-Style-banner.png"

// Category Images
import TShirtImg from "../assets/Clothing-category-imgs/T-shirt-img.jfif"
import DressImg from "../assets/Clothing-category-imgs/Dress-img.jfif"
import SneakersImg from "../assets/Clothing-category-imgs/Sneaker-img.jfif"
import JacketImg from "../assets/Clothing-category-imgs/Jacket-img.jfif"
import PantsImg from "../assets/Clothing-category-imgs/Pant-img.jfif"


const Clothing = () => {

    const categories = [
        { name: "T-Shirts", img: TShirtImg },
        { name: "Dresses", img: DressImg },
        { name: "Sneakers", img: SneakersImg },
        { name: "Jackets", img: JacketImg },
        { name: "Pants", img: PantsImg },
    ];

    return (
        <>
            <Navbar />
            <HeroBanner img={ClothingBanner} size="23" />
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} name={category.name} img={category.img} />
                ))}
            </div>
        </>
    )
}

export default Clothing