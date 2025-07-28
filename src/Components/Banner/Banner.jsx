import React from "react";
import BannerPng from "../../assets/shot2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-16 sm:py-0 relative">
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
               Europe, 1948. The war never truly ended it simply mutated into something darker. The ground split open and from the gaping Hellgates came ancient horrors that no bomb could bury. You’re not a savior; you’re a scavenger. Hired to breach the Rift, your mission is simple: extract rare compounds scattered across a shattered continent. But simple doesn't mean safe. With 16 volatile compounds to secure and dozens of threats human, beast, and beyond you get one shot at survival. Every run is a gamble. Load your revolver, burn a perk card, and brace yourself for the unknown.

              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-lg leading-relaxed font-vintage text-[#d0c4b0]"
              >
                You’re being hunted. The demons aren't the only ones with bloodlust. Other players stalk the Rift too, each with their own agenda and nothing to lose. Mid-match, the Devil’s Chair offers you a cruel bargain: trade fragments of your soul for ungodly power but at what cost? Brute force won’t carry you to victory. Smart plays, precise timing, and ruthless decisions will.
Every corner, every sound, every mistake etched in blood. Learn its rules or be consumed by them.This isn’t a place you conquer. It’s a place you survive if you're lucky.
              </p>

              {/* CTA buttons */}
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

            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
