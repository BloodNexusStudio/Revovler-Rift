import React from "react";

const Banner7 = () => {
  return (
    <div className="relative bg-black flex items-center justify-center min-h-screen pt-16 pb-0 sm:py-0 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="space-y-8 text-left text-[#e4d6c3]">
          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-6xl font-vintage font-bold tracking-wide mb-6 text-[#f5ebd9]"
          >
            A Huge Thank You to Our Early Supporters
          </h1>

          {/* Thank You Message Body */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] mb-8 px-4 md:px-12"
          >
            We want to give a special shoutout to the amazing people who believed in Revolver Rift from the very beginning. Your support, feedback, and relentless curiosity have been invaluable to our team. From dropping deep insights to helping shape early systems and lore, you’ve helped bring this project to life in more ways than one.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="550"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] mb-8 px-4 md:px-12"
          >
            Thank you for being part of the Rift from day one. We can’t wait to show you what’s coming next — and we’re proud to have you on this journey with us.
          </p>

          {/* Divider */}
          <hr className="border-t-2 border-[#7f1d1d] my-8" />

          {/* Closing Signature */}
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-lg leading-relaxed font-vintage text-[#d0c4b0] mb-8 px-4 md:px-12 text-center font-bold"
          >
            — The Revolver Rift Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner7;
