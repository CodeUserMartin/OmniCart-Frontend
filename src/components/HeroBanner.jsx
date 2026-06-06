
const HeroBanner = ({ img, size }) => {

    return (
        <div className={`w-full h-${size || '96'}`}>
            <img src={img} alt="Hero Banner" className="w-full h-full object-cover" />
        </div>
    )
}

export default HeroBanner