import React from "react";

const Banner6 = () => {
  return (
    <div className="relative bg-black flex items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-16 text-center text-[#e4d6c3]">
          {/* Main Headline */}
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl sm:text-5xl md:text-6xl font-vintage font-bold tracking-wide leading-tight"
          >
            Two Forces. No Mercy.
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl block mt-4">
              Choose Your Side in Revolver Rift
            </span>
          </h2>

          {/* Intro Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0] px-2 sm:px-6"
          >
            When the Rift tore through reality in 1944, Heaven and Hell unleashed their own soldiers to claim what was left of Earth. Now, two factions wage a brutal war for power, relics, and the fate of mankind — and you must choose where you stand.
          </p>

          <hr className="border-t-2 border-[#7f1d1d]" />

          {/* Cleric Deputies */}
          <div className="space-y-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-3xl sm:text-4xl md:text-5xl font-vintage font-semibold"
            >
              The Cleric Deputies
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-base sm:text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0] px-2 sm:px-6"
            >
              <strong>Holy doesn’t mean gentle.</strong> The Clerics are Heaven’s chosen — a militant order of righteous assassins sent to cleanse the Rift with fire, faith, and steel. Armed with relic-infused weapons and divine authority, they see no room for compromise. Their faith is unwavering, and their judgment final.
            </p>
            <ul
              data-aos="fade-up"
              data-aos-delay="700"
              className="list-disc list-inside text-base sm:text-lg md:text-xl text-[#d0c4b0] font-vintage space-y-2 px-4 sm:px-6"
            >
              <li>Tactical, disciplined, and unforgiving</li>
              <li>Blessed gear and sanctified abilities</li>
              <li>Fight for purity — or die trying</li>
            </ul>
          </div>

          <hr className="border-t-2 border-[#7f1d1d]" />

          {/* Hell Deputies */}
          <div className="space-y-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-3xl sm:text-4xl md:text-5xl font-vintage font-semibold"
            >
              The Hell Deputies
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="900"
              className="text-base sm:text-lg md:text-xl leading-relaxed font-vintage text-[#d0c4b0] px-2 sm:px-6"
            >
              <strong>Condemned. Released. Unleashed.</strong> Once damned souls, now Hell’s elite killers. The Hell Deputies are chaos made flesh — brutal enforcers of infernal will, driven by vengeance and power. They strike without warning and kill without hesitation, wielding cursed tools and dark knowledge born in fire.
            </p>
            <ul
              data-aos="fade-up"
              data-aos-delay="1000"
              className="list-disc list-inside text-base sm:text-lg md:text-xl text-[#d0c4b0] font-vintage space-y-2 px-4 sm:px-6"
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
