import React from "react";

const Banner5 = () => {
  return (
    <div className="relative bg-black flex items-center justify-center min-h-screen pt-16 pb-0 sm:py-0 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-6 text-left">
          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-vintage font-bold tracking-wider text-[#e4d6c3] mb-8"
          >
            Teaser Incoming <br/> The Rift is Stirring...
          </h1>

          {/* Body Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] space-y-4 mb-8"
          >
                The first official Revolver Rift teaser trailer is about to drop and it’s just the beginning of your journey. Soon, you’ll witness the war-torn world of 1944, where cursed monsters roam, holy and unholy warriors clash, and only the most skilled can extract what truly matters.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="550"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] space-y-4 mb-8"
          >
            But the teaser is merely the opening act. In the weeks that follow, we’ll unveil a deadly arsenal of weapons, grotesque Rift creatures, and the major targets you’ll be hunting across each extraction match. And as whispers grow louder, know this: the Closed Beta Tech Demo is approaching fast.  Slots will be limited, and only those who are prepared and registered will enter the Rift in time.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] space-y-4 mb-8"
          >
            This is your warning. The Rift is waking. And it remembers who dares to enter. Stay tuned for critical updates about registration, because once the gates open... they won’t stay that way for long.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner5;
