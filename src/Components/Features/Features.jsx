import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FiShield, FiGlobe, FiZap } from "react-icons/fi";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";

const NewsData = [
  {
    title: "Welcome to the Rift",
    icon: <FaCameraRetro className="text-4xl text-accent duration-300" />,
    image: img1,
    description: `The year is 1908, but the world is not as the history books tell it. Towering gothic castles loom through smog. Knights wield revolvers as ancient blood feuds turn to gunfire.`,
    link: "#",
    delay: "300",
  },
  {
    title: "The Celestial Tear",
    icon: <GiNotebook className="text-4xl text-accent duration-300" />,
    image: img2,
    description: `A strange event—the Rift—has torn through reality, imbuing bloodlines with uncanny powers. The streets of steel and soot are no longer ruled by men alone.`,
    link: "#",
    delay: "400",
  },
  {
    title: "Rise of the Iron Factions",
    icon: <SlNote className="text-4xl text-accent duration-300" />,
    image: img3,
    description: `Warriors, nobles, and cursed machines now vie for dominance. Alliances are fragile, and power comes at a bloody cost. Control the Rift, control the future.`,
    link: "#",
    delay: "500",
  },
  {
    title: "Wanderer’s Chronicle",
    icon: <FiShield className="text-4xl text-accent duration-300" />,
    image: img4,
    description: `You are a duelist, a survivor caught in the crossfire. Will you seize the Rift’s gifts or fall to its horrors? The age of myth and muzzle has begun.`,
    link: "#",
    delay: "600",
  },
  {
    title: "Whispers from the Smog",
    icon: <FiGlobe className="text-4xl text-accent duration-300" />,
    image: img1,
    description: `From cathedrals to sewer dens, secrets stir. Alchemists whisper of keys, priests beg the sun for light. The Rift listens… and hungers.`,
    link: "#",
    delay: "700",
  },
  {
    title: "Guns, Steel & Bloodlines",
    icon: <FiZap className="text-4xl text-accent duration-300" />,
    image: img2,
    description: `The new age is here. Swords and spells clash with rifles and relics. Every duel could alter fate. Every shot echoes through history.`,
    link: "#",
    delay: "800",
  },
];

const NewsCardGrid = () => {
  return (
    <div className="w-full bg-black text-[#d1c7b7] py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading + Button */}
        <div className="flex justify-between items-center mb-12">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            News Blogs
          </h1>
          {/* <a
            href="#"
            className="bg-[#9B1C1C] hover:bg-[#7A1616] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Blogs
          </a> */}
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {NewsData.map((news, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={news.delay}
              className="
                group 
                backdrop-blur-md 
                bg-[rgba(40,30,30,0.4)] 
                border border-[#5a3e3e40] 
                transition-all 
                rounded-xl 
                overflow-hidden 
                p-8 sm:py-12
                duration-300
              "
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-44 object-cover rounded-md mb-5 hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <div className="flex justify-center mb-3">{news.icon}</div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {news.title}
              </h2>
              <p
                className="text-base leading-relaxed font-light"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                {news.description}
              </p>
              <a
                href={news.link}
                className="inline-block mt-6 text-accent text-lg font-semibold duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCardGrid;
