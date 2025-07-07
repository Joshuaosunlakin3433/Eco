import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="SaaS Logo" className="size-8" />
            <MenuIcon className="size-5 md:hidden" />
            <nav className="hidden md:flex gap-6 items-center text-black/60 tracking-tight">
              <a href="" className="nav-links">About</a>
              <a href="" className="nav-links">Features</a>
              <a href="" className="nav-links">Customers</a>
              <a href="" className="nav-links">Updates</a>
              <a href="" className="nav-links">Help</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 ">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
