import IconCakeImage from "../assets/images/icons/icon_cake1.png";
import IconCakeImage2 from "../assets/images/icons/icon_cake2.png";
import IconCakeImage3 from "../assets/images/icons/icon_cake3.png";
import IconCakeImage4 from "../assets/images/icons/icon_cake4.png";

const ShopCakeIcon = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:gap-10 ml-auto">
        <div className="bg-white h-15 lg:h-30 w-auto p-5 rounded-3xl flex flex-col items-center justify-center">
          <img
            src={IconCakeImage}
            className="h-10 w-10 lg:h-20 lg:w-20 object-center object-cover"
          />
          <div>
            <p className="font-league font-bold text-[#a6141f] mt-2">Classic</p>
          </div>
        </div>

        <div className="bg-white h-15 lg:h-30 w-auto p-5 rounded-3xl flex flex-col items-center justify-center">
          <img
            src={IconCakeImage2}
            className="h-10 w-10 lg:h-20 lg:w-20 object-center object-cover"
          />
          <div>
            <p className="font-league font-bold text-[#a6141f] mt-2">Gourmet</p>
          </div>
        </div>

        <div className="bg-white h-15 lg:h-30 w-auto p-5 rounded-3xl flex flex-col items-center justify-center">
          <img
            src={IconCakeImage3}
            className="h-10 w-10 lg:h-20 lg:w-20 object-center object-cover"
          />
          <div>
            <p className="font-league font-bold text-[#a6141f] mt-2">Cookies</p>
          </div>
        </div>

        <div className="bg-white h-15 lg:h-30 w-auto p-5 rounded-3xl flex flex-col items-center justify-center">
          <img
            src={IconCakeImage4}
            className="h-10 w-10 lg:h-20 lg:w-20 object-center object-cover"
          />
          <div>
            <p className="font-league font-bold text-[#a6141f] mt-2">Deserts</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCakeIcon;
