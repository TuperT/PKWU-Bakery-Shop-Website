import CartSvg from "../../assets/svgs/cart-shopping-svgrepo-com2.svg"

const Product = ({ image, name, price }) => {
    const formatedPrice = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
    }).format(price)

    return (
        <div className="bg-white w-full max-w-45 sm:max-w-50 md:max-w-55 lg:max-w-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-2 sm:p-3 md:p-4">
                <div className="mb-1 sm:mb-2">
                    <img 
                        src={image} 
                        className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-lg sm:rounded-xl" 
                        alt={name}
                    />
                </div>
                <div className="flex flex-col text-[#c4333e] font-league">
                    <p className="text-sm sm:text-base md:text-lg font-bold truncate">{name}</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold mt-0.5">{formatedPrice}</p>

                    <div className="flex gap-1 text-yellow-400 text-xl">
                        ★★★★★
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-[#a6141f] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-tl-xl sm:rounded-tl-2xl rounded-br-xl sm:rounded-br-2xl flex items-center justify-center hover:bg-[#8a1019] transition-colors cursor-pointer">
                    <img 
                        src={CartSvg} 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 filter brightness-0 invert" 
                        alt="Add to cart"
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;