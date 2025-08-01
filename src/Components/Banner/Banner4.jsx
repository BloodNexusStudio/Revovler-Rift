import React from "react";
import BannerPng from "../../assets/brown_street.jpeg";
import { BiPlayCircle } from "react-icons/bi";

const Banner4 = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>

          {/* text content section */}
          <div className="lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl md:text-4xl font-vintage tracking-wide text-[#e4d6c3]"
              >
                Welcome to the Rift
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-base leading-relaxed font-vintage text-[#d0c4b0]"
              >
                The year is 1908, but the world is not as the history books tell it. Here, towering gothic castles are shrouded in the smog of burgeoning industry. Knights clad in steel plate carry newly-forged revolvers, and ancient blood feuds are settled not just with swords, but with the deafening roar of gunpowder.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-base leading-relaxed font-vintage text-[#d0c4b0]"
              >
                A strange celestial event—the Rift—has torn through the fabric of reality, imbuing certain bloodlines with uncanny abilities. Now, factions clash in the cobblestone streets and iron-wrought factories, vying for control of this newfound power. You are a wanderer, a duelist, caught in the crossfire of this new, brutal age.
              </p>

              {/* CTA buttons */}
              <div className="flex gap-6 pt-2">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="800"
                  onClick={togglePlay}
                  className="flex items-center gap-2 text-white"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>

            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
