import { Link } from "react-router"
import LocationIcon from "../assets/svgs/location-pin-svgrepo-com.svg"
import CallIcon from "../assets/svgs/call-chat-svgrepo-com.svg"
import MailIcon from "../assets/svgs/mail-open-alt-1-svgrepo-com.svg"
import Tiktok from "../assets/images/icons/tiktok.png"
import Instagram from "../assets/images/icons/instagram.png"
import Facebook from "../assets/images/icons/facebook.png"

const FooterNavBar = () => {
    return (
        <footer>
            <div className="bg-red-50">
                <div className="flex flex-col lg:flex-row lg:justify-between bg-[#a6141f] w-full h-auto rounded-t-[4rem] py-8 px-8 md:px-12 gap-8">
                    
                    {/* Title */}
                    <div id="Title" className="flex flex-col">
                        <p className="font-league text-white font-bold text-[3rem] leading-none">
                            BAKERY
                        </p>
                        <p className="text-white font-league text-md font-bold mt-2">
                            Sweet moments baked <br />fresh everyday. <br />
                            <br />
                            Made with love, <br />
                            delivered with care.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-10 flex-wrap">
                        <div id="Quick Links" className="flex flex-col">
                            <p className="text-white font-bold font-league text-2xl mb-2">Quick Links</p>
                            <ul className="space-y-1">
                                <li><Link to="/" className="text-white hover:underline">Home</Link></li>
                                <li><Link to="/products" className="text-white hover:underline">Products</Link></li>
                                <li><Link to="/contact" className="text-white hover:underline">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div id="Customer Service" className="flex flex-col">
                            <p className="text-white font-bold font-league text-2xl mb-2">Customer service</p>
                            <ul className="space-y-1">
                                <li><Link to="/return-policy" className="text-white hover:underline">Return Policy</Link></li>
                                <li><Link to="/terms" className="text-white hover:underline">Terms & Conditions</Link></li>
                                <li><Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div id="Contact Info" className="flex flex-col">
                            <p className="text-white font-bold font-league text-2xl mb-2">Contact us</p>
                            <p className="text-white font-league flex flex-row items-center gap-2 mt-1">
                                <img src={LocationIcon} className="w-6 h-6" /> Jakarta, Indonesia
                            </p>
                            <p className="text-white font-league flex items-center gap-2 mt-1">
                                <img src={CallIcon} className="w-6 h-6" /> +62 845-1297-62860
                            </p>
                            <p className="text-white font-league flex items-center gap-2">
                                <img src={MailIcon} className="w-6 h-6" /> bakery@gmail.com
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-3 mt-4">
                                <Link to="https://tiktok.com" target="_blank" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                                    <img src={Tiktok} alt="Tiktok" className="w-5 h-5" />
                                </Link>
                                <Link to="https://instagram.com" target="_blank" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                                    <img src={Instagram} alt="Instagram" className="w-5 h-5" />
                                </Link>
                                <Link to="https://facebook.com" target="_blank" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                                    <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#cd646b] w-full h-12 flex items-center justify-center">
                    <p className="text-white font-serif text-center">© 2026 Bakery. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterNavBar