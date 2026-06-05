import { Link } from 'react-router-dom'

const CategoryOption = () => {

    return (
        <div className="bg-(--primary-color)">

            <div className="flex justify-center items-center gap-5 p-5">


                <Link to="/groceries"
                    className="shadow-(--box-shadow) w-2/12 py-5 px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="font-bold text-xl">Groceries</span></Link>


                <Link to="/electronics"
                    className="shadow-(--box-shadow) w-2/12 py-5 px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="font-bold text-xl">Electronics</span>
                </Link>


                <Link to="/clothing"
                    className="shadow-(--box-shadow) w-2/12 py-5 px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="font-bold text-xl">Clothing</span>
                </Link>

            </div>

        </div>
    )
}

export default CategoryOption