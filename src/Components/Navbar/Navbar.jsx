import React, { useState } from "react";
import Logo from "../../assets/IMG_0985.png";
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
      <div className="w-full px-0 py-3 flex justify-between items-center">

        {/* 🔰 Logo aligned to far left */}
        <div className="flex items-center gap-8 pl-8">
          <img
           src={Logo}
           alt="Revolver Rift Logo"
          className="max-h-20 sm:max-h-24 md:max-h-28 scale-100 object-contain drop-shadow-md transition-transform duration-300"



/>

        </div>

        {/* 🖥 Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 pr-4">
          <ul className="flex items-center gap-6">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="group">
                  <img
                    src={home}
                    alt={name}
                    className="h-8 w-auto transition-transform group-hover:scale-110 group-hover:drop-shadow-lg duration-300"
                  />
                </a>
              </li>
            ))}
            
          </ul>

          <a href="#" className="ml-6">
  <img
    src={BuyTheGameButton}
    alt="Buy the Game"
    className="h-14 md:h-16 w-auto hover:scale-105 transition-transform duration-300 drop-shadow"
  />
</a>
        </div>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 pr-4">
     
          <button onClick={toggleMenu} aria-label="Menu Toggle">
            {showMenu ? (
              <HiMenuAlt1 size={30} className="transition-transform hover:scale-110" />
            ) : (
              <HiMenuAlt3 size={30} className="transition-transform hover:scale-110" />
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
        <div className="flex flex-col items-center py-6 gap-6">
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
                className="h-12 w-auto hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
          <a href="#" onClick={handleLinkClick}>
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-10 w-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
