import React, { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Lead Narrative Designer',
    quote: "Sometimes we scream ideas across the room like maniacs and that’s how a Devil Chair is born.",
  },
  {
    id: 2,
    name: 'Game Programmer',
    quote: "Balance is important. But chaos? Chaos is beautiful.",
  },
  {
    id: 3,
    name: 'Level Design Director',
    quote: "We didn't want safe. We wanted unforgettable.",
  },
  {
    id: 4,
    name: 'Creative Director',
    quote: "Most games have lore. We’ve got an apocalypse. And trust me, it’s a lot more fun than average bedtime story.",
  },
  {
    id: 5,
    name: 'Combat Designer',
    quote: "You think this is a war? No. It’s a blood feast. And you're invited, whether you’re ready or not.",
  },
  {
    id: 6,
    name: 'Game Director',
    quote: "Designing Revolver Rift is like teaching a wolf to hunt. But instead of a wolf, it’s a warlord. And instead of hunting... it’s chaos. But it works.",
  },
];

const TestimonialSlider = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const sliderRef = useRef(null);

  const handlePause = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleResume = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white font-sans px-4 py-20">
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-28">
        <h1 className="text-4xl font-bold text-[#b89a6f]" style={{ fontFamily: "'Cinzel', serif" }}>
          Developer's Insights
        </h1>
        <p className="text-lg text-gray-400 mt-2">Whispers from those who've walked the edge.</p>
      </div>

      {/* Carousel */}
      <div
        className="w-[90%] inline-flex flex-nowrap overflow-hidden
        [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]"
      >
        <ul
          ref={sliderRef}
          onMouseDown={handlePause}
          onMouseUp={handleResume}
          onMouseLeave={handleResume}
          className="flex items-center justify-center md:justify-start [&_li]:mx-5 animate-infinite-scroll"
        >
          {duplicatedTestimonials.map((item, index) => (
            <li
              key={index}
              className="bg-[#0a0a0a] text-gray-200 p-8 rounded-xl w-[320px] h-[350px] flex flex-col items-center text-center flex-shrink-0 border border-[#5c1e1e]"
            >
              <div className="text-6xl text-red-600 mb-4 leading-none">“</div>
              <p className="text-lg font-light italic text-gray-300 leading-relaxed mb-4">
                {item.quote}
              </p>
              <h3 className="text-xl font-semibold tracking-wide text-red-100 mt-auto">
                - {item.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Global animation style */}
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
