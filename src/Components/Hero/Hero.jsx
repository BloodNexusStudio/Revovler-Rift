import React, { useEffect, useState } from 'react';
import bgVideo from '../../assets/shot1.mp4';
import crackedBox from '../../assets/image.png';
import revolverTitle from '../../assets/Rift.png'; // Image of REVOLVER RIFT with reflection

const HeroCountdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-12-31T00:00:00');
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen text-white font-serif overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔳 Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Animations */}
      <style>{`
        @keyframes bounceDrop {
          0% {
            transform: translateY(-200px) scale(1.2) rotateX(30deg);
            opacity: 0;
          }
          50% {
            transform: translateY(10px) scale(0.98);
            opacity: 1;
          }
          70% {
            transform: translateY(-6px) scale(1.03);
          }
          85% {
            transform: translateY(4px) scale(0.99);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>

      {/* 📜 Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* 🖼️ Title Image with top spacing */}
        <img
          src={revolverTitle}
          alt="Revolver Rift Title"
          className="w-[80%] max-w-5xl mb-6 animate-fade-in mt-20"
          style={{ animation: 'bounceDrop 1.2s ease-out forwards' }}
        />

        <p className="mt-2 text-lg md:text-xl max-w-2xl text-[#e0d8c3] font-light">
          In an age of steam and steel, an ancient feud is rekindled with new fire. The duel is set.
        </p>

        <div className="flex items-center justify-center mt-6 mb-4 gap-4 text-[#b5a891] text-2xl">
          <span className="w-16 border-t border-[#b5a891]" />
          <span className="font-bold">×</span>
          <span className="w-16 border-t border-[#b5a891]" />
        </div>

        {/* ⏳ Countdown Boxes */}
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center rounded-xl"
              style={{
                width: '9.5rem',
                minHeight: '9.5rem',
                padding: '2rem 1rem',
                backgroundImage: `url(${crackedBox})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                border: '1px solid rgba(165, 139, 111, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                animation: `bounceDrop 1s ease-out forwards`,
                animationDelay: `${index * 0.25}s`,
              }}
            >
              <span className="text-4xl md:text-5xl text-[#f5ebd9] font-mono tracking-widest">{value}</span>
              <span className="text-sm md:text-base uppercase text-[#e0d2bd] mt-2 tracking-wider">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCountdown;
