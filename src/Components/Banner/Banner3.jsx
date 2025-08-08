import React from "react";
import BannerPng from "../../assets/newassets/9.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner3 = ({ togglePlay }) => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-16 sm:gap-24">
        
        {/* Text Section */}
        <div className="w-full sm:w-1/2 space-y-6 px-4 sm:px-0">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-4xl md:text-5xl font-vintage tracking-wide text-[#e4d6c3]"
          >
            What Makes Revolver Rift Unique
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0] text-left"
          >
            <p>This is not your typical shooter:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Alternate History Warfare:</strong> Fight in a gritty, war-torn 1944 where the supernatural has collided with World War II.
              </li>
              <li>
                <strong>Light vs. Darkness:</strong> Choose your side — the righteous Cleric Deputys or the brutal Cursed Hell Deputys. Each faction brings its own playstyle, Perks, and twisted morality.
              </li>
              <li>
                <strong>Catch the enemies:</strong> Track enemies by supernatural Perks, sound, skill, and strategy. Every fight is earned.
              </li>
              <li>
                <strong>Dynamic Objectives:</strong> Secure artifacts, rescue VIPs, defeat demonic bosses, clear anomalies, jump into the Arena, visit the Rift Royal, or go in for a Warmup — every match changes, and only what you extract survives.
              </li>
              <li>
                <strong>Risk & Power Systems:</strong> Trade your soul at the Devil’s Chair, survive chaos unleashed by Rift Storms, and shape your fate.
              </li>
              <li>
                <strong>Style Meets Grit:</strong> WWII-era weapons meet supernatural gear. Blood, tension, and tactical choices define every moment.
              </li>
            </ul>
            <p className="mt-4">Enter the Rift. Fight for your soul. Extract — or die trying.</p>
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-up"
          data-aos-once="false"
          className="w-full sm:w-1/2 flex justify-center"
        >
          <img
            src={BannerPng}
            alt="Revolver Rift Scene"
            className="w-full max-w-[1200px] object-contain rounded-lg shadow-xl border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
