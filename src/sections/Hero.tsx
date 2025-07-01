import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png"
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container ">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="header">
              Pathway to productivity
            </h1>
            <p className="text-xl ">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your successes{" "}
            </p>
            <div className="flex gap-3 mt-8">
              <button className="btn">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="size-5 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image src={cylinderImage} alt="Cylinder Image" height={220} className="hidden md:block -top-8 -left-32 absolute" />
            <Image src={noodleImage} alt="Cylinder Image" width={220} className="hidden lg:block top-[524px] left-[448px] rotate-[30deg] absolute" />
          </div>
        </div>
      </div>
    </section>
  );
};
