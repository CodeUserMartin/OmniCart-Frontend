
const HomePageCategory = () => {


    const gamingTechImg = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeI9UNmsfKuql4WpxYPg2ZDNhvJ83Tuq2Smn-xk64nVQ&s=10",
            alt: "laptop",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVk_rrhbCyMwyxAxQT88UpQND3HfiFoS-2jUIbQBBAw&s",
            alt: "gaming-controller",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV79M4Uefm_JJ8QXB7RLvyPZZEuaOxkHTkmkejpEGeg&s=10",
            alt: "headphones",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0gCNW8rDfZ9UdB0PR9_uFhBg0jbU_P-gfRPlcHF2Cw&s=10",
            alt: "keyboard-mouse",
        },
    ];

    const fashionFindImg = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGRpv8QP5qzTwFB6FZoHSw-idnvWcxWOStrqaZ5IgDw&s=10",
            alt: "shirt",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoYHqhKtmIHedz9zY7HVfQJQDXTvxImH4J3imW68cDA&s=10",
            alt: "pants",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSG2z0S5MBSGfnbxgPGNcg9iDNVAefXVC6UEtu7K_DJw&s=10",
            alt: "t-shirt",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqxdpu0RRZ3glm75X447JhHB58lCmrY74Y-Auqu1t7Q&s=10",
            alt: "sneakers",
        },
    ];

    const dailyEssentialsImg = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPP6JwrErxYpj9RE0vN2Xu0vRZh5gMju75whY8ssf0g&s=10",
            alt: "daily-essentials",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7p_iI3y3MuTeBVBfM5l9Z-kZe2Tg1U5Zeb5MP_nt8A&s=10",
            alt: "daily-essentials",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq03MMoHqd3R_WAGxnGiBDFjftIE1kXbxOGMjWwtOKw&s=10",
            alt: "daily-essentials",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUPiDcTNxTucesizgKod2dRqVrkSOZ6RrAoMuU99B4g&s=10",
            alt: "daily-essentials",
        },
    ];

    const beautyCareImg = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4BCWUWH9M_zisM-lU_UMpJMe1fyTESuNyNoOvwxVCQ&s=10",
            alt: "beauty-care",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjbdUH3bYa6mTSN9PnbotiTEd9uATRpOERSSfv4O67w&s=10",
            alt: "beauty-care",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtPVHShiyUsLH72LGBvUYOYAdwc1yLPvBS6eU8eRSOA&s=10",
            alt: "beauty-care",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvS-k9tcRuzvTeAD0MRn8OKQ8bDUsG58Ar70h3iYSVA&s=10",
            alt: "beauty-care",
        },
    ];

    return (
        <section className="w-full p-4 mx-auto mt-10">
            <div className="space-y-4 flex flex-col justify-between gap-5">

                <div className="flex items-center flex-col lg:flex-row justify-between gap-5 bg-gray-100 shadow-(--box-shadow) p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        🎮 Gaming & Tech
                    </h2>

                    <div className="flex gap-3">

                        {gamingTechImg.map((item, index) => (
                            <img key={index} src={item.img} alt={item.alt} loading="lazy" className="w-15
                            lg:w-20 lg:h-14 object-cover" />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-gray-100 shadow-(--box-shadow) p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        👕 Fashion Finds
                    </h2>

                    <div className="flex gap-3">
                        {fashionFindImg.map((item, index) => (
                            <img key={index} src={item.img} alt={item.alt} loading="lazy" className="w-15
                            lg:w-20 lg:h-14 object-cover" />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-gray-100 shadow-(--box-shadow) p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        🛒 Daily Essentials
                    </h2>

                    <div className="flex gap-3">
                        {dailyEssentialsImg.map((item, index) => (
                            <img key={index} src={item.img} alt={item.alt} loading="lazy" className="
                            w-15
                            lg:w-20 lg:h-14 object-cover" />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-gray-100 shadow-(--box-shadow) p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        ✨ Beauty & Care
                    </h2>

                    <div className="flex gap-3">
                        {beautyCareImg.map((item, index) => (
                            <img key={index} src={item.img} alt={item.alt} loading="lazy" className="
                            w-15
                            lg:w-20 lg:h-14 object-cover" />
                        ))}
                    </div>
                </div>

            </div>
        </section>

    )
}

export default HomePageCategory