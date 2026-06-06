import MilkImg from "../assets/Grociries-category-imgs/milk-img.jfif"


const CategoryCard = ({ img, name }) => {
    return (
        <div className="bg-white m-6 flex flex-col items-center justify-center gap-2 w-36 h-40 rounded-lg overflow-hidden shadow-(--box-shadow)">

            {/* Category Image */}
            <div className="w-24 h-24 object-cover">
                <img src={img} alt="Category Image" className="w-full h-full object-cover" />
            </div>

            {/* Category Name */}
            <div>
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
        </div>
    )
}

export default CategoryCard;