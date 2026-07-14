import { Link } from 'react-router-dom'

const CategoryOption = () => {

    return (
        <div className="bg-(--primary-color)">

            <div className="flex justify-center items-center gap-5 p-5">


                <Link to="/groceries"
                    className="shadow-(--box-shadow) lg:w-2/12 py-2 px-4 lg:py-5 lg:px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="text-md font-bold lg:text-xl">Groceries</span></Link>


                <Link to="/electronics"
                    className="py-2 px-4 shadow-(--box-shadow) lg:w-2/12  lg:py-5 lg:px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="font-bold lg:text-xl">Electronics</span>
                </Link>


                <Link to="/clothing"
                    className="py-2 px-4 shadow-(--box-shadow) lg:w-2/12 lg:py-5 lg:px-3 bg-(--primary-color) text-(--accent-color) rounded-md text-center hover:bg-(--accent-color) hover:cursor-pointer hover:text-white transition duration-300">
                    <span className="font-bold lg:text-xl">Clothing</span>
                </Link>

            </div>

        </div>
    )
}

export default CategoryOption