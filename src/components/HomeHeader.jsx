import CakeImage from "../assets/images/cake1.png"
import CakeImage2 from "../assets/images/cake2.png"
import CakeImage3 from "../assets/images/cake3.png"

const HomeHeader = () => {
    return (
        <>
            <div className='min-w-max h-140 bg-linear-to-r from-[#f58ba1] to-[#8a0d15] relative overflow-hidden'>
                <div className="rounded-b-full hidden xl:block bg-[#df8594] ml-[50%] xl:w-[8%] xl:h-[12%]"></div>
                <div className="rounded-full hidden xl:block bg-[#df8594] ml-auto mr-[4%] xl:w-[3%] xl:h-[8%]"></div>
                <div className="rounded-full hidden xl:block bg-[#df8594] ml-[70%] mt-[13%] absolute xl:w-[12%] xl:h-[32%]"></div>
                <div className="rounded-full hidden xl:block bg-[#df8594] ml-[94%] mt-[18%] absolute xl:w-[9%] xl:h-[24%]"></div>

                <div className="flex flex-col md:flex-row  sm:mt-10 md:mt-2 items-center justify-center xl:mt-0 xl:items-start xl:justify-start ml-0 xl:ml-20">
                    <img src={CakeImage} className="w-70 h-70 md:w-90 md:h-90 rounded-full object-cover border-10 border-white" />

                    <div className="mt-6 ml-8 xl:ml-10 xl:text-left">
                        <p className="font-league 3xl md:text-4xl xl:text-6xl text-white font-bold">Our Sweet <br /> Promises</p>
                        <p className="font-open font-league text-white text-xl md:text-2xl xl:text-3xl">Satisfy your sweet cravings</p>

                        <div className="bg-[#a6141f] w-40 h-auto p-2 rounded-full flex items-center justify-center mt-10 relative">
                            <div className="bg-[#a6141f] rounded-full absolute mb-14 text-white mr-10 font-league p-2 font-bold -rotate-3">
                                <p className="text-[0.8rem]">Spesial Offer</p>
                            </div>
                            <p className="font-poppins text-white font-extrabold text-2xl">Save 20%</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:flex-col lg:gap-8 lg:ml-auto lg:mr-[20%] lg:z-10 xl:flex xl:flex-row xl:gap-8 xl:ml-auto xl:mr-10 xl:z-10">
                        <img src={CakeImage2} className="w-10 h-10 md:w-60 md:h-60 rounded-full object-cover border-6 border-white" />
                        <img src={CakeImage3} className="w-10 h-10 md:w-60 md:h-60 rounded-full object-cover border-6 border-white" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader