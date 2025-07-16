import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
          <div className="relative inline-flex before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="Eco logo" className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 *:footer-hover">
          <a href="#Products">About</a>
          <a href="#Features">Features</a>
          <a href="#Testimonials">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 *:footer-hover *:cursor-pointer">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} Built by Dr C.J under Frontend
          Tribe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
