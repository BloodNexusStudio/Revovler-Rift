import React from "react";
import BannerPng from "../../assets/shot2.1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner3 = ({ togglePlay }) => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-16 sm:gap-24">

        {/* Text Section */}
        <div className="w-full sm:w-1/2 space-y-6 text-left px-4 sm:px-0">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl md:text-5xl font-vintage tracking-wide text-[#e4d6c3]"
          >
            EXPERIENCE {" "} RIFT FIRST-HAND
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0]"
          >
            Step into a war-torn world where steel meets gunpowder, and the supernatural reshapes destiny. Witness the chaos, confront demon-warped enemies, and feel the fear bleed through the fog.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="550"
            className="text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0]"
          >
            This is more than a game — it's a descent into an alternate 1908. Will you survive the Rift or be consumed by it?
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex gap-6 pt-3">
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-btn text-base md:text-lg"
            >
              Join the Fight
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="800"
              onClick={togglePlay}
              className="flex items-center gap-2 text-white text-base md:text-lg"
            >
              <BiPlayCircle className="text-3xl" />
              Watch Trailer
            </button>
          </div> */}
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
            className="w-full max-w-[500px] object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
