import { useState } from "react"
import { Link } from "react-router"
import CartSvg from "../assets/svgs/cart-shopping-svgrepo-com.svg"
import LoveSvg from "../assets/svgs/heart-svgrepo-com.svg"
import PersonSvg from "../assets/svgs/person-svgrepo-com.svg"
import SearchSvg from "../assets/svgs/search-svgrepo-com.svg"
import HamburgerSvg from "../assets/svgs/hamburger-menu-svgrepo-com.svg"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [search, setSearch] = useState("")

    return (
        <nav className="bg-[#fdefee] w-full h-16 relative flex items-center justify-center">
            {/* Navbar Title */}
            <div className="ml-12">
                <span className="text-[#a6141f] font-bold font-league sm:text-2xl md:text-3xl lg:text-4xl mr-2">
                    BAKERY
                </span>
            </div>
            

            {/* Desktop Navbar */}
            <div className="hidden lg:flex flex-row gap-6 items-center font-league font-bold text-[#a6141f] md:text-sm lg:absolute lg:left-60 xl:left-1/2 xl:-translate-x-1/2 xl:ml-0 transform">
                <Link to="/" className="px-2 pb-1 border-b-2 border-transparent hover:border-[#a6141f] transition-colors duration-200">Home</Link>
                <Link to="/products" className="px-2 pb-1 border-b-2 border-transparent hover:border-[#a6141f] transition-colors duration-200">Products</Link>
                <Link to="/contact" className="px-2 pb-1 border-b-2 border-transparent hover:border-[#a6141f] transition-colors duration-200">Contact Us</Link>
            </div>

            {/* Mobile Navbar */}
            {menuOpen && (
                <div 
                className="lg:hidden absolute top-16 left-0 right-0 bg-[#fdefee] flex flex-col items-center gap-4 py-4 z-50 text-[#a6141f] font-league">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
            )}

            <div className="ml-auto mr-12 flex flex-row items-center gap-4 sm:gap-6">
                {/* Search Bar */}
                <div 
                className="rounded-2xl h-8 bg-[#a6141f] p-1 flex items-center gap-1 mr-10 sm:w-40 md:w-50 lg:h-8 lg:w-60 xl:w-70">
                    <input 
                    type="text" 
                    name="bread-search" 
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white rounded-s-2xl text-sm border-none h-6 p-3 text-[#a6141f] font-openSans 
                    focus:outline-none focus:ring-0 w-[80%]"/>
                    
                    {/* Search Icon */}
                    <div className="bg-[#a6141f] z-2 h-full w-[15%] flex items-center justify-center hover:cursor-pointer">
                        <img src={SearchSvg} className="h-full" />
                    </div>
                </div>

                {/* Icons */}
                <div className="h-10 w-10 flex items-center justify-center hover:cursor-pointer hover:rotate-360 transition delay-75 duration-600">
                    <img src={PersonSvg} className="h-full" />
                </div>

                <div className="h-8 w-8 flex items-center justify-center hover:cursor-pointer hover:rotate-360 transition delay-75 duration-600">
                    <img src={LoveSvg} className="h-full" />
                </div>

                <div className="h-10 w-10 flex items-center justify-center hover:cursor-pointer hover:rotate-360 transition delay-75 duration-600">
                    <img src={CartSvg} className="h-full" />
                </div>
                
                {/* Mobile Navbar Button Icon */}
                <div
                onClick={() => setMenuOpen(prev => !prev)}
                className="h-10 w-10 flex items-center justify-center hover:cursor-pointer lg:hidden">
                    <img src={HamburgerSvg} className="h-full" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar