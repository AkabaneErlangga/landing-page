import Image from "next/image";
import logo from "@/public/img/logo.png"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-10 gap-y-8">
      <Image
        src={logo}
        alt="Nodewave Logo"
        width={150}
      />
      <h4 className="font-semibold text-lg">PT NODEWAVE SOLUSI TEKNOLOGI</h4>
      <div>
        <h4 className="font-semibold text-lg">Graha Pena Surabaya</h4>
        <h4 className="font-semibold text-lg">Jl. Ahmad Yani no. 88 Surabaya</h4>
        <h4 className="font-semibold text-lg">Phone : +62811258280</h4>
        <h4 className="font-semibold text-lg">Email : support@nodewave.id</h4>
      </div>
      <div className="flex gap-4 mb-10">
        <FacebookIcon fill="white" strokeWidth={1} />
        <TwitterIcon fill="white" strokeWidth={1} />
        <YoutubeIcon />
        <LinkedinIcon fill="white" strokeWidth={1} />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default FooterSection;