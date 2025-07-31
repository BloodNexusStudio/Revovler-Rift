import React from "react";
import BannerPng from "../../assets/shot2.png";
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
              className="w-full max-w-[550px] rounded-lg shadow-xl"
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
  Europe, 1948. The war never ended, it just changed form. <br />
  Hellgates tore open the soil. Something old crawled out. <br />
  You’re not here to cleanse. You’re here to extract. <br />
  Every run is high risk: 16 compounds, dozens of threats, one shot at survival. <br />
  Demons aren’t the only monsters out here. <br />
  Load your revolver. Burn a perk card. Pray it’s enough. <br />
  The Devil’s Chair waits, trade your soul for power mid-match. <br />
  You won’t win by force. You win by escape. <br />
  Enter the Rift. Make it out …or don’t.
</p>
              {/* <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-lg leading-relaxed font-vintage text-[#d0c4b0]"
              >
                You’re being hunted. The demons aren't the only ones with bloodlust. 
                Other players stalk the Rift too, each with their own agenda and nothing to lose. 
                Mid-match, the Devil’s Chair offers you a cruel bargain: trade fragments of your soul for ungodly power but at what cost? 
                Brute force won’t carry you to victory. Smart plays, precise timing, and ruthless decisions will. 
                Every corner, every sound, every mistake etched in blood. Learn its rules or be consumed by them. 
                This isn’t a place you conquer. It’s a place you survive if you're lucky.
              </p> */}

              {/* CTA buttons - optional */}
              {/* <div className="flex gap-6 pt-3">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn text-base md:text-lg"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="800"
                  onClick={togglePlay}
                  className="flex items-center gap-2 text-white text-base md:text-lg"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
