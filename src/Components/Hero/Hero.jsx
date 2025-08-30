import React, { useEffect, useState, useRef } from 'react';
import bgVideo from '../../assets/newassets/1.mp4';
import crackedBox from '../../assets/image.png';
import revolverTitle from '../../assets/IMG.png';

const HeroCountdown = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);

  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-08-29T13:00:00+02:00');
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

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: '05',
    minutes: '30',
  });

  // Function to update background height
  const updateBackgroundHeight = () => {
    if (sectionRef.current && videoRef.current && overlay1Ref.current && overlay2Ref.current) {
      const sectionHeight = sectionRef.current.scrollHeight;
      const height = `${Math.max(sectionHeight, window.innerHeight)}px`;
      
      videoRef.current.style.height = height;
      overlay1Ref.current.style.height = height;
      overlay2Ref.current.style.height = height;
    }
  };

  useEffect(() => {
    // Multiple attempts to update height at different timing intervals
    const updateWithDelay = () => {
      updateBackgroundHeight();
      setTimeout(updateBackgroundHeight, 100);
      setTimeout(updateBackgroundHeight, 300);
      setTimeout(updateBackgroundHeight, 500);
      setTimeout(updateBackgroundHeight, 1000);
    };

    // Initial update
    updateWithDelay();
    
    // Update when images load
    const images = sectionRef.current?.querySelectorAll('img');
    images?.forEach(img => {
      if (img.complete) {
        updateBackgroundHeight();
      } else {
        img.addEventListener('load', updateBackgroundHeight);
        img.addEventListener('error', updateBackgroundHeight);
      }
    });
    
    // Update height on window resize
    const handleResize = () => {
      setTimeout(updateBackgroundHeight, 50);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', updateBackgroundHeight);
    
    // Use ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateBackgroundHeight, 10);
    });
    
    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', updateBackgroundHeight);
      images?.forEach(img => {
        img.removeEventListener('load', updateBackgroundHeight);
        img.removeEventListener('error', updateBackgroundHeight);
      });
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full text-white font-serif" style={{ minHeight: '100vh' }}>
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full object-cover z-0"
        style={{ minHeight: '100vh' }}
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 📳 Overlays */}
      <div
        ref={overlay1Ref}
        className="absolute top-0 left-0 w-full z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))',
          minHeight: '100vh'
        }}
      />
      <div
        ref={overlay2Ref}
        className="absolute top-0 left-0 w-full z-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
          minHeight: '100vh'
        }}
      />

      {/* 📜 Content */}
      <div className="relative z-20 flex flex-col sm:px-6 lg:px-[5vw] text-center py-10">
        {/* Top content container */}
        <div className="flex flex-col items-center w-full mt-[10vh] mb-20">
          {/* 🖼️ Logo */}
          <img
            src={revolverTitle}
            alt="Revolver Rift Title"
            className="w-[clamp(250px,45vw,500px)] mb-4"
            style={{ animation: 'bounceDrop 1.2s ease-out forwards' }}
          />

          {/* ⏳ Countdown */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 mb-8">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className="flex flex-col items-center justify-center rounded-xl"
                style={{
                  width: 'clamp(7.5rem, 22vw, 9.5rem)',
                  minHeight: 'clamp(7.5rem, 22vw, 9.5rem)',
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
                <span className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] text-[#f5ebd9] font-mono tracking-widest">
                  {value}
                </span>
                <span className="text-sm uppercase text-[#e0d2bd] mt-2 tracking-wider">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            Heads up, Deputies! The Revolver Rift teaser needs a bit more time. 
            We've switched to <span className="font-bold text-[#AA0000]">Unreal Engine 5.6</span> to bring you maximum quality. 
            Better late than lame.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroCountdown;