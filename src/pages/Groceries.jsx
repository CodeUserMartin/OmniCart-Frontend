import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import GroceriesBanner from "../assets/Groceries-Fresh-banner.png"
import CategoryCard from "../components/CategoryCard.jsx"


// Category Images
import Milk from "../assets/Grociries-category-imgs/Milk-img.jfif"
import Vegetables from "../assets/Grociries-category-imgs/vegetable-img.jfif"
import Fruits from "../assets/Grociries-category-imgs/Fruit-img.jfif"
import Bread from "../assets/Grociries-category-imgs/Bread-img.jfif"
import BeautyCare from "../assets/Grociries-category-imgs/Beauty-and-Care-img.jfif"

const Groceries = () => {

    const categories = [
        { name: "Milk", img: Milk },
        { name: "Vegetables", img: Vegetables },
        { name: "Fruits", img: Fruits },
        { name: "Bread", img: Bread },
        { name: "Beauty & Care", img: BeautyCare },
    ]

    return (
        <> 
        <Navbar />
        <HeroBanner img={GroceriesBanner} size="23" />
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {categories.map((category, index) => (
                <CategoryCard key={index} name={category.name} img={category.img} />
            ))}
        </div>
        </>
    )
}

export default Groceries