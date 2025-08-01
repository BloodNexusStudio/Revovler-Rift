import React from 'react';

// Testimonial data from your code
const testimonials = [
  {
    id: 1,
    name: 'Lead Narrative Designer',
    quote: "Sometimes we scream ideas across the room like maniacs and that’s how a Devil Chair is born." ,
  },
  {
    id: 2,
    name: ' Game Programmer',
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
    quote: 'Most games have lore. We’ve got an apocalypse. And trust me, it’s a lot more fun than average bedtime story. ',
  },
  {
    id: 5,
    name: 'Combat Designer',
    quote: "You think this is a war? No. It’s a blood feast. And you're invited, whether you’re ready or not.",
  },
  // Adding one more to have an even number for perfect duplication
  {
    id: 6,
    name: 'Game Director',
    quote: 'Designing Revolver Rift is like teaching a wolf to hunt. But instead of a wolf, it’s a warlord. And instead of hunting... it’s chaos. But it works.',
  },
];

const TestimonialSlider = () => {
  // We duplicate the testimonials to create a seamless loop for the animation.
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white font-sans px-4 py-20">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold text-[#b89a6f]" style={{ fontFamily: "'Cinzel', serif" }}>
    Developer's Insights
  </h1>
        <p className="text-lg text-gray-400 mt-2">Whispers from those who've walked the edge.</p>
      </div>

      {/* This container uses a CSS mask to create a fade effect on the left and right sides,
        making the infinite scroll appear more natural. The overflow is hidden to contain the scrolling list.
      */}
      <div
        className="w-full max-w-7xl mx-auto inline-flex flex-nowrap overflow-hidden 
                   [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        {/* This list contains the duplicated testimonials. 
          - The `animate-infinite-scroll` class applies the continuous horizontal movement.
          - The `hover:[animation-play-state:paused]` utility class pauses the animation when a user hovers over the slider.
        */}
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 animate-infinite-scroll hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((item, index) => (
            <li
              key={index} // Using index is fine here because the list is static
              className="bg-black text-gray-200 p-8 rounded-xl border border-gray-700 w-[320px] h-[350px] flex flex-col items-center text-center flex-shrink-0"
            >
              <div className="text-6xl text-red-600 mb-4 leading-none">“</div> {/* Increased quote font size */}
              <p className="text-lg font-light italic text-gray-300 leading-relaxed mb-4"> {/* Increased font size for the quote */}
                {item.quote}
              </p>
              <h3 className="text-xl font-semibold tracking-wide text-red-100 mt-auto"> {/* Increased font size for the name */}
                - {item.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Global styles for the animation keyframes */}
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-infinite-scroll {
          /* The animation duration is increased to 60s for a slower, more deliberate scroll */
          animation: infinite-scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
