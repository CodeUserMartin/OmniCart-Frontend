import HomeBanner from '../assets/OmniCart-Home-banner.png'

const HeroBanner = () => {

    return (
        <div className="w-full h-96 bg-gray-500">
            <img src={HomeBanner} alt="Hero Banner" className="w-full h-full object-cover" />
        </div>
    )
}

export default HeroBanner