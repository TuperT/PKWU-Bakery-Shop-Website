import TitleDecoration from "../assets/images/title_decoration.png"
import HomeHeader from "./HomeHeader";
import Product from "./Products/Product";
import ShopCakeIcon from "./ShopCakeIcon"
import BestCake1 from "../assets/images/best_cake1.png"
import PromiseImage1 from "../assets/images/promise_image1.png"
import PromiseImage2 from "../assets/images/promise_image2.png"
import Tiktok from "../assets/images/icons/tiktok.png"
import Instagram from "../assets/images/icons/instagram.png"
import Facebook from "../assets/images/icons/facebook.png"

import ReviewData from "../data/Customer_Review.json"
import CakeData from "../data/Products.json"

import { InstagramEmbed } from "react-social-media-embed";
import { useState } from "react";

const HomeContent = () => {
    const reviews = Object.values(ReviewData.review)
    const products = Object.values(CakeData.products)

    const [currentIndex, setCurrentIndex] = useState(0)
    const prev = () => setCurrentIndex(i => (i - 1 + reviews.length) % reviews.length)
    const next = () => setCurrentIndex(i => (i + 1) % reviews.length)

    const { name, comment } = reviews[currentIndex]

    return (
        <>  
            {/* Website top */}
            <HomeHeader />

            {/* Shop */}
            <div className="bg-[#fdf8f4] h-[670vh] lg:h-[300vh] w-[90%] rounded-2xl absolute top-145 left-1/2 -translate-x-1/2 px-10 py-15" id="item-shop">
                <div className="flex flex-row">
                    <div>
                        <p className="font-league text-5xl text-[#a6141f] font-bold">MENU</p>
                        <p className="font-league text-[#c4333e] font-bold text-xl">what will you wish for</p>
                        <img src={TitleDecoration} className="h-8 w-28 mt-2" />
                    </div>

                    {/* Shop cake type icon */}
                    <ShopCakeIcon />
                </div>
                
                {/* Best seller title text */}
                <div className="mt-4">
                    <div>
                        <p className="font-league text-2xl text-[#a6141f] font-bold">Our best seller menu</p>
                    </div>

                    {/* Best seller product(5 product) */}
                    <div id="Best seller">
                        <div className="grid grid-cols-2 xl:grid-cols-5 mt-6 gap-2 xl:gap-0">
                            {products.slice(0,5).map((cake, key) => (
                                <Product key={key} image={cake.filePath} name={cake.cakeName} price={cake.price} />
                            ))}
                        </div>
                        <button className="font-league font-extrabold text-[#fdf8f4] bg-[#a6141f] w-full xl:w-30 h-10 rounded-full xl:ml-[90%] mt-6 hover:cursor-pointer">
                            VIEW ALL
                        </button>
                    </div>
                    
                    {/* Promises */}
                    <div id="Promise">
                        <p className="font-league text-5xl text-[#a6141f] font-bold">Our Promise</p>
                        <p className="font-league text-[#c4333e] font-bold text-xl">There's no secret spell - only honesty</p>

                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
                            <img src={PromiseImage1} className="w-150 h-40 md:h-75 md:w-150" />

                            <div className="bg-[#fce7e5] rounded-4xl p-10 flex flex-col lg:flex-row">
                                <img src={PromiseImage2} className="w-50 h-50" />
                                <div>
                                    <p className="font-league text-4xl text-[#a6141f] font-bold">The magical ticket </p>
                                    <p className="font-league text-[#c4333e] font-bold text-2xl mt-8">Add 3 reminders in your account. Win a tiket worth Rp. 5.000,00</p>
                                    <button className="font-league text-xl font-extrabold text-[#fdf8f4] bg-[#a6141f] w-45 h-12 rounded-full lg:ml-[52%] mt-8 hover:cursor-pointer">
                                        UNLOCK NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Video */}
                        <div id="Video" className="mt-10">
                            <div className="flex flex-row items-center justify-between w-full mb-4">
                                <p className="font-league text-[#c4333e] font-bold text-3xl">
                                    What's In Your Heart?
                                </p>
                                
                                <div className="flex flex-row gap-4">
                                    <img src={Tiktok} className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity cursor-pointer" />
                                    <img src={Facebook} className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity cursor-pointer" />
                                    <img src={Instagram} className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity cursor-pointer" />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-40">
                                <div className="w-87.5 shrink-0">
                                    <InstagramEmbed 
                                    url="https://www.instagram.com/p/DVcrSJuEs2p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                    width={320} 
                                    captioned={false} 
                                />
                                </div>

                                <div className="w-87.5 shrink-0">
                                    <InstagramEmbed 
                                    url="https://www.instagram.com/p/DVH2o9XkmdC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                    width={320} 
                                    captioned={false} 
                                />
                                </div>

                                <div className="w-87.5 shrink-0">
                                    <InstagramEmbed 
                                    url="https://www.instagram.com/p/DVigWwlEqif/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                    width={320} 
                                    captioned={false} 
                                />
                                </div>                                                                
                            </div>
                        </div>

                        <div id="Customer Review" className="mt-16">
                            <p className="font-league text-5xl text-[#a6141f] font-bold text-center mb-10">
                                Customer Review
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <button onClick={prev} className="bg-[#a6141f] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:bg-[#c4333e] transition z-10 shrink-0">
                                    ←
                                </button>

                                <div className="flex items-center gap-4 overflow-hidden">
                                    <div className="w-52 h-52 bg-[#fce7e5] rounded-3xl opacity-60 scale-90 shrink-0 hidden md:block" />

                                    <div className="bg-white rounded-3xl shadow-lg px-10 py-8 w-60 lg:w-100 h-60 shrink-0 text-center">
                                        <div className="flex items-start gap-3 mb-4">
                                            <span className="text-[#a6141f] text-5xl leading-none font-serif">"</span>

                                            <div className="text-left">
                                                <p className="font-league font-extrabold text-[#a6141f] text-xl">{name}</p>
                                                <div className="flex gap-1 text-yellow-400 text-lg">
                                                    ★★★★★
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-league font-bold text-[#c4333e] text-left lg:text-center leading-relaxed">
                                            {comment}
                                        </p>
                                    </div>
                                    <div className="w-52 h-52 bg-[#fce7e5] rounded-3xl opacity-60 scale-90 shrink-0 hidden md:block" />

                                </div>
                                <button onClick={next} className="bg-[#a6141f] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:bg-[#c4333e] transition z-10 shrink-0">
                                    →
                                </button>

                            </div>

                            {/* Dot Indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                                {reviews.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-[#a6141f] w-4" : "bg-[#f0b8b8]"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop background */}
            <div className="min-w-max h-[680vh] lg:h-[300vh] bg-[#fdefee]"></div>   
        </>
    )
}

export default HomeContent;