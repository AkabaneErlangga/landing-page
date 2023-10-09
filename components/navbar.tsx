import Image from "next/image";
import logo from "@/public/img/logo.png"
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-transparent">
      <Image
        src={logo}
        alt="Nodewave Logo"
        width={150}
      />
      <div className="hidden lg:flex items-center gap-4">
        <Link href="#website">
          Website
        </Link>
        <Link href="#mobile-apps">
          Mobile Apps
        </Link>
        <Link href="#portfolio">
          Portfolio
        </Link>
        <button className="bg-green rounded-full px-4 py-2">
          Make an App
        </button>
      </div>
      <MenuIcon className="lg:hidden"/>
    </div>
  );
}

export default Navbar;