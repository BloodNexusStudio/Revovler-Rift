import React from "react";
import Logo from "../../assets/IMG.png";
import BuyTheGameButton from "../../assets/under_maintaince.png";
import home from "../../assets/HOME.png"; // Home icon PNG
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1 md:py-1 flex justify-between items-center">
        
        {/* 🔰 Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Revolver Rift Logo"
            className="h-28 -my-4 md:h-30 md:-my-3"
          />
        </div>

        {/* 🖥 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="text-lg font-medium border-b-2 border-transparent hover:border-red-500 transition"
                >
                  {/* Replacing Home text with PNG */}
                  <img 
                    src={home} 
                    alt="Home" 
                    className="h-8 w-auto hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </li>
            ))}
            <DarkMode />
          </ul>

          {/* 🟥 Buy The Game Image Button */}
          <a href="#" className="ml-6">
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </nav>

        {/* 📱 Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <DarkMode />
          {showMenu ? (
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
          ) : (
            <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
