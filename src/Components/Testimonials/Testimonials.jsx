import React, { useRef, useCallback } from 'react';

const testimonials = [
  { id: 1, name: 'Lead Narrative Designer', quote: "Sometimes we scream ideas across the room like maniacs and that’s how a Devil Chair is born." },
  { id: 2, name: 'Game Programmer', quote: "Balance is important. But chaos? Chaos is beautiful." },
  { id: 3, name: 'Level Design Director', quote: "We didn't want safe. We wanted unforgettable." },
  { id: 4, name: 'Creative Director', quote: "Most games have lore. We’ve got an apocalypse. And trust me, it’s a lot more fun than average bedtime story." },
  { id: 5, name: 'Combat Designer', quote: "You think this is a war? No. It’s a blood feast. And you're invited, whether you’re ready or not." },
  { id: 6, name: 'Game Director', quote: "Designing Revolver Rift is like teaching a wolf to hunt. But instead of a wolf, it’s a warlord. And instead of hunting... it’s chaos. But it works." },
];

const TestimonialSlider = () => {
  const duplicated = [...testimonials, ...testimonials];
  const sliderRef = useRef(null);

  const pause = useCallback(() => {
    if (sliderRef.current) sliderRef.current.style.animationPlayState = 'paused';
  }, []);
  const resume = useCallback(() => {
    if (sliderRef.current) sliderRef.current.style.animationPlayState = 'running';
  }, []);

  const preventContextMenu = (e) => e.preventDefault();

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white font-sans px-4 py-16 md:py-20">
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
      <div
        className="w-full max-w-[1920px] inline-flex flex-nowrap overflow-hidden mask-gradient"
        // extra safety so long-press doesn’t trigger context menu on touch devices
        onContextMenu={preventContextMenu}
      >
        <ul
          ref={sliderRef}
          // press & hold to pause (pointer works for mouse + touch)
          onPointerDown={pause}
          onPointerUp={resume}
          onPointerCancel={resume}
          onPointerLeave={resume}
          className="select-none flex items-stretch justify-start gap-3 sm:gap-4 md:gap-6 animate-infinite-scroll will-change-transform"
        >
          {duplicated.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="
                bg-[#0a0a0a] text-gray-200
                p-4 sm:p-6 md:p-8
                rounded-xl
                w-[78vw] xs:w-[70vw] sm:w-[55vw] md:w-[40vw] lg:w-[360px]
                min-h-[260px] sm:min-h-[280px] md:min-h-[300px]
                flex flex-col items-center text-center
                flex-shrink-0 border border-[#5c1e1e]
              "
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl text-red-600 mb-3 sm:mb-4 leading-none">“</div>
              <p className="text-[clamp(0.85rem,2.2vw,1rem)] font-light italic text-gray-300 leading-relaxed mb-4">
                {item.quote}
              </p>
              <h3 className="text-[clamp(0.95rem,2.4vw,1.125rem)] font-semibold tracking-wide text-red-100 mt-auto">
                – {item.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Global / component styles */}
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        /* Seamless marquee */
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Default speed; tweakable via CSS var */
        .animate-infinite-scroll {
          animation: infinite-scroll var(--marquee-speed, 60s) linear infinite;
          animation-play-state: running;
        }

        /* Edge fade masks, responsive */
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent 0,
            black var(--mask-edge, 24px),
            black calc(100% - var(--mask-edge, 24px)),
            transparent 100%);
          mask-image: linear-gradient(to right, transparent 0,
            black var(--mask-edge, 24px),
            black calc(100% - var(--mask-edge, 24px)),
            transparent 100%);
        }

        /* Tweak masks and speed by viewport */
        @media (min-width: 640px) {
          .mask-gradient { --mask-edge: 48px; }
          .animate-infinite-scroll { --marquee-speed: 55s; }
        }
        @media (min-width: 1024px) {
          .mask-gradient { --mask-edge: 96px; }
          .animate-infinite-scroll { --marquee-speed: 50s; }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
