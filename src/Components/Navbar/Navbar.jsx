import React, { useState } from "react";
import BuyTheGameButton from "../../assets/under_maintaince.png";
import home from "../../assets/HOME.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-black/50 backdrop-blur-lg border-b border-white/10 text-white shadow-md">
      <div className="w-full py-4 flex justify-between items-center">
        {/* 🔰 Empty placeholder for spacing (was Logo before) */}
        <div className="w-[20%]"></div>

        {/* 🖥 Desktop Navigation shifted 20% from right edge */}
        <div className="hidden md:flex items-center gap-8" style={{ marginRight: '10%' }}>
          <ul className="flex items-center gap-6">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="group">
                  <img
                    src={home}
                    alt={name}
                    className="h-6 w-auto transition-transform group-hover:scale-110 group-hover:drop-shadow-lg duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a href="#" className="ml-6">
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300 drop-shadow"
            />
          </a>
        </div>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 pr-4">
          <button onClick={toggleMenu} aria-label="Menu Toggle">
            {showMenu ? (
              <HiMenuAlt1 size={28} className="transition-transform hover:scale-110" />
            ) : (
              <HiMenuAlt3 size={28} className="transition-transform hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-5 gap-5">
          {NavLinks.map(({ id, name, link }) => (
            <a
              key={id}
              href={link}
              onClick={handleLinkClick}
              className="block"
            >
              <img
                src={home}
                alt={name}
                className="h-8 w-auto hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
          <a href="#" onClick={handleLinkClick}>
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
