import React from "react";
import poster from "../../assets/content1.webp";
import bgImage from '../../assets/Texturelabs_Grunge_353M.jpg';

const Banner = () => {
  const navbarHeight = 80; // match your actual navbar height

  return (
    <div
      className="relative w-full bg-black h-screen w-screen bg-cover  bg-no-repeat"
      style={{
        backgroundImage: `url(${poster})`,
        backgroundPosition: "80% 50%",
        height: `calc(100vh - ${navbarHeight}px)`,
        marginTop: 0,
      }}
    >
      {/* Vignette overlay (corners + extra top/bottom thickness) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* main vignette corners */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* stronger top fade */}
        <div
          className="absolute top-0 left-0 w-full h-[25%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        />

        {/* stronger bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-[25%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center w-full">
          {/* text content section */}
          <div className="lg:pr-10 px-2">
            <div className="space-y-6 text-center ">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl md:text-4xl lg:text-5xl font-custom tracking-wide pt-28 text-[#e4d6c3]"
              >
                Welcome to the Rift
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                 className="text-base md:text-lg leading-relaxed text-gray-300 space-y-4 bg-left "
              >
                <p >
                  A hardcore PvPvE Extraction Shooter with tactical depth and hellish stakes.

                </p>

                <p>
                  Every match is a sandbox of deadly choices: drop into war-torn 1944 as part of a cursed or blessed faction, loot powerful artifacts, and face demons, undead, and rival players before the Rift collapses.
                </p>

                <p>
                  Use period weapons, perks, and gadgets to build your loadout, track enemies, and ambush with precision.
                </p>

                <p >
                  But remember <span className="font-bold text-[#AA0000]">only what you extract survives.</span> High risk. High reward. No second chances.
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
