import React, { useEffect, useState } from 'react';
import bgVideo from '../../assets/newassets/1.mp4';
import crackedBox from '../../assets/image.png';
import revolverTitle from '../../assets/IMG.png';

const HeroCountdown = () => {
  const calculateTimeLeft = () => {
    // Target date set to 29 August 2025 at midnight CET (in UTC)
    const targetDate = new Date('2025-08-29T00:00:00+02:00');
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000); // Update every minute
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

      {/* 🔳 Overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))',
        }}
      />
      <div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* 📜 Content */}
      <div className="relative z-20 flex flex-col h-full px-[5vw] text-center justify-start">
        <div className="flex flex-col items-center w-full mt-[10vh]">
          {/* 🖼️ Logo */}
          <img
            src={revolverTitle}
            alt="Revolver Rift Title"
            className="w-[45vw] max-w-[500px] min-w-[250px] mb-10"
            style={{ animation: 'bounceDrop 1.2s ease-out forwards' }}
          />

          {/* ⏳ Countdown */}
          <div className="flex flex-wrap justify-center gap-6 -mt-[12vh]">
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
                  border: '1px solid rgba(165, 139, 111, 0.3)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                  animation: `bounceDrop 1s ease-out forwards`,
                  animationDelay: `${index * 0.25}s`,
                }}
              >
                <span className="text-[2rem] sm:text-[2.5rem] text-[#f5ebd9] font-mono tracking-widest">{value}</span>
                <span className="text-sm uppercase text-[#e0d2bd] mt-2 tracking-wider">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCountdown;
