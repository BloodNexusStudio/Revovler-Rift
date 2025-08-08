import React from "react";
import BannerPng from "../../assets/newassets/SHOT_1.0000.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-16 sm:py-12 bg-black">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 min-h-[720px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* image section */}
          <div data-aos="fade-up" className="w-full">
            <img
              src={BannerPng}
              alt="Brown Street"
              className="w-full max-w-[720px] mx-auto rounded-lg shadow-xl border-0"
            />
          </div>

          {/* text content section */}
          <div className="lg:pr-10 px-2">
            <div className="space-y-6 text-center">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl md:text-4xl lg:text-5xl font-vintage tracking-wide text-[#e4d6c3]"
              >
                Welcome to the Rift
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-base md:text-lg leading-relaxed font-vintage text-[#d0c4b0] space-y-4 text-center"
              >
                <p className="font-semibold text-[#e4d6c3] text-lg">
                  A Hardcore PvPvE Extraction Shooter with Tactical Depth and Hellish Stakes
                </p>

                <p>
                  In Revolver Rift, every match is a deadly sandbox of decisions. Drop into war-torn 1944 as part of a cursed or blessed faction. Loot powerful artifacts, battle AI-controlled demons, undead, and rival players, and fight your way to one of the last extraction points before the Rift collapses.
                </p>

                <p>
                  Use period-based weapons, unique perks, and deadly gadgets. Build your loadout. Track targets. Ambush enemies. But remember: only what you extract survives.
                </p>

                <p className="font-bold text-[#e4d6c3]">
                  High risk. High reward. No second chances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
