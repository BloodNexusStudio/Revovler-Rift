import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FiShield, FiGlobe, FiZap } from "react-icons/fi";

import img1 from "../../assets/newassets/colt 19111.png";
import img2 from "../../assets/newassets/trench gun 3.png";
import img3 from "../../assets/newassets/p08 2.png";
import img4 from "../../assets/img4.jpeg";

const NewsData = [
  {
    title: "The Art of Building Immersion",
    icon: <FaCameraRetro className="text-4xl text-accent duration-300" />,
    image: img1,
    description: "Creating a truly immersive experience isn’t just about visuals — it’s about the small details that pull players into another world.",
    fullDescription: "Creating a truly immersive experience isn’t just about visuals — it’s about the small details that pull players into another world. From ambient sounds to the way light filters through a room, these subtle touches invite players to feel like they’re not just playing a game, but living in it. We focus on atmosphere over perfection, knowing that mood and engagement are what matter most. Every corner tells a story, and even the smallest detail can change how players experience the world we create.",
    link: "#",
    delay: "300",
  },
  {
    title: "The Power of Uncertainty: Creating Suspense",
    icon: <GiNotebook className="text-4xl text-accent duration-300" />,
    image: img2,
    description: "Suspense is the art of leaving players uncertain about what comes next. It’s not just the big moments that make players tense — it’s the quiet ones too.",
    fullDescription: "Suspense is the art of leaving players uncertain about what comes next. It’s not just the big moments that make players tense — it’s the quiet ones too. The moments of silence, slow pacing, and what players don’t see, often have the greatest impact. Creating suspense means building tension without giving too much away, keeping players on edge and making every twist feel unexpected. It’s about playing with their minds as much as the gameplay itself.",
    link: "#",
    delay: "400",
  },
  {
    title: " The Invisible Work: Making the Game Feel Real",
    icon: <SlNote className="text-4xl text-accent duration-300" />,
    image: img3,
    description: "Some of the most important work in game design is invisible. It’s the subtle things.",
    fullDescription: "Some of the most important work in game design is invisible. It’s the subtle animations, ambient sounds, and interaction feedback that make the world feel real. Whether it’s a hand movement or the soft rustle of leaves, these small details are what create a living, breathing world. The goal is to make every interaction feel natural, and that’s the invisible work that truly brings the game to life.",
    link: "#",
    delay: "500",
  },
];

const NewsCardGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <div className="w-full bg-black text-[#d1c7b7] py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Button */}
       <div className="flex justify-center items-center mb-12">
  <h1 className="text-4xl font-bold text-[#b89a6f]" style={{ fontFamily: "'Cinzel', serif" }}>
    Developer Blogs
  </h1>
</div>


        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-14">
          {NewsData.map((news, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={news.delay}
              className="group backdrop-blur-md bg-[rgba(40,30,30,0.4)] border border-[#5a3e3e40] transition-all rounded-xl overflow-hidden p-8 sm:py-12 duration-300 cursor-pointer"
              onClick={() => handleCardClick(news)}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-44 object-cover rounded-md mb-5 hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <div className="flex justify-center mb-3">{news.icon}</div>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Cinzel', serif", color: "#b89a6f" }}>
                {news.title}
              </h2>
              <p className="text-base leading-relaxed font-light" style={{ fontFamily: "'EB Garamond', serif", color: "#e0c4a2" }}>
                {news.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected card */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 modal-background"
          onClick={handleBackgroundClick}
        >
          <div className="bg-gradient-to-b from-black/70 to-black/50 text-white p-6 w-[90%] sm:w-[60%] rounded-lg shadow-xl relative mt-16">
            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              X
            </button>

            {/* Back Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 left-2 text-white text-xl font-bold"
            >
              ← Back
            </button>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-60 object-cover rounded-md mb-5"
            />
            <h2 className="text-4xl font-bold mb-4 text-[#f4e1c1]">{selectedCard.title}</h2>
            <p className="text-lg leading-relaxed mb-4 text-[#e0c4a2]">{selectedCard.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCardGrid;