
const HomePageCards = () => {

    const cards = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            description: "Get products delivered quickly."
        },
        {
            icon: "🛍️",
            title: "Multiple Sellers",
            description: "Large variety of products."
        },
        {
            icon: "⭐",
            title: "Quality Products",
            description: "Verified sellers and reviews."
        }
    ];

    return (
        <section className="w-full p-4 mx-auto mt-10">

            <h2 className="text-center text-4xl font-bold text-red-800 mb-12">
                Why OmniCart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {cards.map((card, index) => (
                    <div key={index} className="bg-gray-100 shadow-(--box-shadow) p-6 rounded-lg text-center">
                        <div className="text-4xl mb-4">
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                            {card.title}
                        </h3>
                        <p className="text-gray-600">
                            {card.description}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default HomePageCards