import React from "react"; 
import BannerPng from "../../assets/newassets/SHOT_1.0000.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-16 sm:py-0 relative bg-black">
      <div className="container min-h-[720px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img
              src={BannerPng}
              alt="Brown Street"
              className="w-full max-w-[1100px] rounded-lg shadow-xl"
            />
          </div>

          {/* text content section */}
          <div className="lg:pr-20 relative">
            <div className="relative z-10 space-y-6">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl md:text-5xl font-vintage tracking-wide text-[#e4d6c3]"
              >
                Welcome to the Rift
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-lg leading-relaxed font-vintage text-[#d0c4b0]"
              >
                <h2><b>A Hardcore PvPvE Extraction Shooter with Tactical Depth and Hellish Stakes,</b></h2><br/>
                In Revolver Rift, every match is a deadly sandbox of decisions. Drop into war torn 1944 as part of a cursed or blessed faction. Loot powerful artifacts, battle AI-controlled demons, undead, and rival players and fight your way to one of the last extraction points before the Rift collapses.<br/><br/>
                Use period-based weapons, unique perks, and deadly gadgets. Build your loadout. Track targets. Ambush enemies. But remember: only what you extract survives.<br/><br/>
                <b>High risk. High reward. No second chances.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
