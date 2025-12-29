// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Vertical ABOUT ME label (Desktop only) */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          {/* Section Title */}
          <p className="font-semibold mb-3 text-[#16f2b3] text-xl uppercase tracking-wide">
            Who I Am
          </p>

          {/* Short Intro */}
          <p className="text-gray-200 text-sm lg:text-lg mb-4">
            {personalData.description}
          </p>

          {/* About */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
            {personalData.about}
          </p>

          {/* Internship / Opportunity (italic + subtle) */}
          <p className="text-gray-500 italic text-sm lg:text-base">
            {personalData.roleOpportunity}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt={personalData.name}
            className="rounded-lg transition-all duration-700 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
