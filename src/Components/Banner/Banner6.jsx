import React from "react";

const Banner6 = () => {
  return (
    <div className="relative bg-black flex items-center justify-center min-h-screen pt-16 pb-0 sm:py-0 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="space-y-8 text-center text-[#e4d6c3]">
          {/* Main Headline */}
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-6xl md:text-7xl font-vintage font-bold tracking-wide mb-6"
          >
            Two Forces. No Mercy.
            <br />
            <span className="text-4xl md:text-5xl block mt-4">Choose Your Side in Revolver Rift</span>
          </h2>

          {/* Intro Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xl md:text-2xl leading-relaxed font-vintage text-[#d0c4b0] mb-8 px-4 md:px-12"
          >
            When the Rift tore through reality in 1944, Heaven and Hell unleashed their own Soldiers to claim what was left of Earth. Now, two factions wage a brutal war for power, relics, and the fate of mankind — and you must choose where you stand.
          </p>

          <hr className="border-t-2 border-[#7f1d1d] my-8" />

          {/* The Cleric Deputies */}
          <div className="space-y-4">
            <h2
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-4xl md:text-5xl font-vintage font-semibold text-[#e4d6c3]"
            >
              The Cleric Deputies
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-xl md:text-2xl leading-relaxed font-vintage text-[#d0c4b0] mb-4 px-4 md:px-12"
            >
              <strong>Holy doesn’t mean gentle.</strong> The Clerics are Heaven’s chosen — a militant order of righteous Assassins sent to cleanse the Rift with fire, faith, and steel. Armed with relic-infused weapons and divine authority, they see no room for compromise. Their faith is unwavering, and their judgment final.
            </p>
            <ul
              data-aos="fade-up"
              data-aos-delay="700"
              className="list-disc list-inside text-xl md:text-2xl text-[#d0c4b0] font-vintage space-y-2 px-4 md:px-12"
            >
              <li>Tactical, disciplined, and unforgiving</li>
              <li>Blessed gear and sanctified abilities</li>
              <li>Fight for purity — or die trying</li>
            </ul>
          </div>

          <hr className="border-t-2 border-[#7f1d1d] my-8" />

          {/* The Hell Deputies */}
          <div className="space-y-4">
            <h2
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-4xl md:text-5xl font-vintage font-semibold text-[#e4d6c3]"
            >
              The Hell Deputies
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="900"
              className="text-xl md:text-2xl leading-relaxed font-vintage text-[#d0c4b0] mb-4 px-4 md:px-12"
            >
              <strong>Condemned. Released. Unleashed.</strong> Once damned souls, now Hell’s elite Killers. The Hell Deputies are chaos made flesh — brutal enforcers of infernal will, driven by vengeance and power. They strike without warning and kill without hesitation, wielding cursed tools and dark knowledge born in fire.
            </p>
            <ul
              data-aos="fade-up"
              data-aos-delay="1000"
              className="list-disc list-inside text-xl md:text-2xl text-[#d0c4b0] font-vintage space-y-2 px-4 md:px-12"
            >
              <li>Aggressive, relentless, and unpredictable</li>
              <li>Demonic powers and cursed equipment</li>
              <li>Fight for freedom — or burn with the weak</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner6;
