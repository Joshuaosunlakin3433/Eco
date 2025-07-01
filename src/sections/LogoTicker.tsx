import acmeLogo from "@/assets/logo-acme.png";
import quantomLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="acmelogo" className="logo-ticker" />
            <Image src={quantomLogo} alt="acmelogo" className="logo-ticker" />
            <Image src={celestialLogo} alt="acmelogo" className="logo-ticker" />
            <Image src={echoLogo} alt="acmelogo" className="logo-ticker" />
            <Image src={pulseLogo} alt="acmelogo" className="logo-ticker" />
            <Image src={apexLogo} alt="acmelogo" className="logo-ticker" />
          </div>
        </div>
      </div>
    </section>
  );
};
