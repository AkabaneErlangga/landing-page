import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import ui1 from "@/public/img/ui-design.svg"
import ui2 from "@/public/img/web-design.svg"
import ui3 from "@/public/img/iphone.png"

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 lg:px-48">
      <h4 className="text-2xl font-semibold">Our Product</h4>
      <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-4 p-4">
        <div className="flex gap-4 p-4 rounded-3xl max-w-sm justify-between items-center bg-white">
          <Image
            src={ui1}
            alt="ui1"
          />
          <div className="flex flex-col gap-3 text-black">
            <h5 className="font-bold">Mobile Apps</h5>
            <div className="flex items-end">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>

        <div className="flex gap-4 p-4 outline outline-1 rounded-3xl max-w-sm justify-between items-center">
          <Image
            src={ui2}
            alt="ui2"
          />
          <div className="flex flex-col gap-3 text-white">
            <h5 className="font-bold">Website</h5>
            <div className="flex items-end">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>

        <div className="row-span-2 flex flex-col gap-4 p-10 rounded-3xl justify-between items-center bg-white">
          <Image
            src={ui3}
            alt="ui3"
          />
          <div className="flex flex-col items-center text-black gap-2">
            <h5 className="font-bold text-lg">Mobile Apps</h5>
            <p className="lg:text-center">Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
            <button className="py-2 px-4 rounded-lg text-white font-semibold bg-green">
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;