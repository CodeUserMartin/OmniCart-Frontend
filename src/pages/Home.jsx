import Navbar from '../components/Navbar.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import HeroText from '../components/HeroText.jsx'
import CategoryOption from '../components/CategoryOption.jsx'
import Footer from '../components/Footer.jsx'

// Hero Banner Image
import HomeBanner from '../assets/OmniCart-Home-banner.png'
import HomePageCategory from '../components/HomePageCategory.jsx'
import HomePageCards from '../components/HomePageCards.jsx'

const Home = () => {

    return (
        <div className="bg-(--primary-color) w-full">
            <Navbar />
            <HeroBanner img={HomeBanner} size="55" />
            <HeroText />

            <CategoryOption />

            <HomePageCategory />

            <HomePageCards />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home