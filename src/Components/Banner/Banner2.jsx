import React from "react";
import Slider from "react-slick";
import Banner1 from "../../assets/SHot2.mp4"; // MP4
import Banner2Img from "../../assets/shot2.1.png";
import Banner3 from "../../assets/shot2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ⬇️ Add a type key for conditional rendering
const banners = [
  { type: "video", src: Banner1 },
  { type: "image", src: Banner2Img },
  { type: "image", src: Banner3 },
];

const Banner2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {banners.map((item, i) => (
            <div key={i} className="px-2">
              <div className="overflow-hidden rounded-2xl shadow-2xl relative group">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[600px] object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-[600px] object-cover transform scale-110 group-hover:scale-105 transition-transform duration-[5000ms] ease-in-out"
                  />
                )}

                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner2;
