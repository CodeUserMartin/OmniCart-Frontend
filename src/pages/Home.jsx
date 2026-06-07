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

            {/* Footer */ }
            <Footer />
        </div>
    )
}

export default Home