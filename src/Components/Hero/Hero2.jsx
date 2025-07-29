import React from 'react';
import vrLogo from '../../assets/main1.png'; // Make sure it's renamed cleanly if needed

const HeroSimple = () => {
  return (
    <section
      className="w-full h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${vrLogo})`,
      }}
    >
      {/* No overlay, no vignette */}
    </section>
  );
};

export default HeroSimple;
