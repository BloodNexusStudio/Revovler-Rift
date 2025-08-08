import React, { useRef, useEffect } from 'react';

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
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.style.cursor = 'grabbing';
      slider.style.animationPlayState = 'paused';
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
      slider.style.animationPlayState = 'running';
    };

    const handleMouseLeave = () => {
      if (isDragging.current) handleMouseUp();
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-black text-white font-serif pt-20 pb-0 px-4 overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-36">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#b89a6f] font-cinzel">
          Developer's Insights
        </h2>
        <p className="text-base md:text-lg text-gray-400 mt-2">
          Whispers from those who've walked the edge.
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <ul
          ref={sliderRef}
          className="flex animate-infinite-scroll gap-6 cursor-grab select-none"
        >
          {duplicatedTestimonials.map((item, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[calc(100%/1)] sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)] xl:w-[calc(100%/5)] px-2"
            >
              <div className="bg-[#0a0a0a] border border-[#5c1e1e] rounded-xl p-6 h-full flex flex-col items-center text-center shadow-lg">
                <div className="text-6xl sm:text-7xl text-red-600 mb-4 leading-none">“</div>
                <p className="text-sm sm:text-base font-light italic text-gray-300 leading-relaxed mb-4">
                  {item.quote}
                </p>
                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-red-100 mt-auto">
                  - {item.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          animation-play-state: running;
        }

        .font-cinzel {
          font-family: 'Cinzel', serif;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
