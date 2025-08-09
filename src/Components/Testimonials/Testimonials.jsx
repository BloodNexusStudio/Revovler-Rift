import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  A11y,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  { id: 1, name: "Lead Narrative Designer", quote: "Sometimes we scream ideas across the room like maniacs and that’s how a Devil Chair is born." },
  { id: 2, name: "Game Programmer", quote: "Balance is important. But chaos? Chaos is beautiful." },
  { id: 3, name: "Level Design Director", quote: "We didn't want safe. We wanted unforgettable." },
  { id: 4, name: "Creative Director", quote: "Most games have lore. We’ve got an apocalypse. And trust me, it’s a lot more fun than average bedtime story." },
  { id: 5, name: "Combat Designer", quote: "You think this is a war? No. It’s a blood feast. And you're invited, whether you’re ready or not." },
  { id: 6, name: "Game Director", quote: "Designing Revolver Rift is like teaching a wolf to hunt. But instead of a wolf, it’s a warlord. And instead of hunting... it’s chaos. But it works." },
];

const TestimonialSlider = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 py-16 md:py-20">
      {/* Header */}
      <div className="w-full max-w-5xl text-center mb-10 md:mb-16 px-2 sm:px-4">
        <h1
          className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#b89a6f]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Developer&apos;s Insights
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2">
          Whispers from those who&apos;ve walked the edge.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-[1500px]">
        <Swiper
          modules={[
            Pagination,
            Autoplay,
            A11y,
            EffectCoverflow,
            Keyboard,
            Mousewheel,
          ]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          loop
          centeredSlides
          grabCursor
          speed={700}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 0.7 }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article
                className="
                  relative mx-auto h-full
                  rounded-2xl p-[1px]
                  bg-gradient-to-b from-[#5c1e1e] via-[#2a2020] to-transparent
                  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                "
              >
                <div
                  className="
                    h-full w-full rounded-2xl
                    bg-[#0b0b0b]/90 backdrop-blur
                    border border-white/10
                    p-6 sm:p-7 md:p-8
                    flex flex-col text-center
                    transition-transform duration-500
                  "
                >
                  <div className="text-5xl sm:text-6xl lg:text-7xl text-[#d55] mb-3 sm:mb-4 leading-none select-none">
                    “
                  </div>
                  <p className="text-[clamp(0.95rem,2.1vw,1.05rem)] font-light italic text-gray-300 leading-relaxed mb-5">
                    {t.quote}
                  </p>
                  <h3 className="text-[clamp(0.95rem,2.4vw,1.125rem)] font-semibold tracking-wide text-[#f2d3b0] mt-auto">
                    – {t.name}
                  </h3>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Styling */}
      <style>{`
        .swiper { overflow: visible; }
        .swiper-slide {
          transition: transform .45s ease, opacity .45s ease, filter .45s ease;
          transform: scale(.90);
          opacity: .55;
          filter: blur(.2px) saturate(.9);
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          transform: scale(.96);
          opacity: .85;
          filter: blur(.0px) saturate(.95);
        }
        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          filter: blur(0) saturate(1);
        }
        .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: #6b7280;
          opacity: .5;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #b89a6f;
          width: 22px; border-radius: 9999px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
