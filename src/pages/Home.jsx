import Navbar from '../components/Navbar.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import HeroText from '../components/HeroText.jsx'
import CategoryOption from '../components/CategoryOption.jsx'

const Home = () => {

    return (
        <div className="bg-(--primary-color)">
            <Navbar />
            <HeroBanner />
            <HeroText />

            <CategoryOption />
        </div>
    )
}

export default Home