import Image from "next/image";

import websitebg from "@/public/img/website.png"
import mobilebg from "@/public/img/mobile.png"

const StartCreatingSection = () => {
  return (
    <div className="flex flex-col px-6 lg:px-44 items-center gap-y-6 mt-8">
      <h3 className="text-2xl font-semibold">Start Creating Websites or Mobile Apps For You Now</h3>
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-4 w-full">
        <div className="flex justify-between items-center bg-white text-slate-800 rounded-xl overflow-hidden">
          <div className="flex flex-col gap-5 w-full md:w-2/3 py-8 px-4 md:px-20 text-center justify-center">
            <h4 className="font-semibold text-2xl">Website</h4>
            <div>
              <h4 className="font-semibold text-lg">Start from</h4>
              <p className="line-through">Rp. 1.000.000</p>
              <h5 className="font-medium">Rp. 500.000</h5>
            </div>
            <button className="text-white bg-green py-2 px-10 rounded-full">
              Order Now
            </button>
          </div>
          <Image
            src={websitebg}
            alt="website-bg"
            width={250}
            className="hidden md:block"
          />
        </div>
        <div className="flex justify-between items-center bg-white text-slate-800 rounded-xl overflow-hidden">
          <div className="flex flex-col gap-5 w-full md:w-2/3 py-8 px-4 md:px-20 text-center justify-center">
            <h4 className="font-semibold text-2xl">Mobile Apps</h4>
            <div>
              <h4 className="font-semibold text-lg">Start from</h4>
              <h5 className="font-medium">Rp. 999.000</h5>
            </div>
            <button className="text-white bg-green py-2 px-10 rounded-full">
              Order Now
            </button>
          </div>
          <Image
            src={mobilebg}
            alt="mobile-bg"
            width={250}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default StartCreatingSection;