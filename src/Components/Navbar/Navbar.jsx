import React, { useState, useEffect } from "react";
import BuyTheGameButton from "../../assets/Group.png";
import home from "../../assets/HOME.png";
import logo from "../../assets/IMG_0983.png"; // 👈 Add your logo asset
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 800);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[9999] text-white transition-all duration-300 ease-in-out
       ${
          isScrolled 
            ? 'bg-black bg-opacity-90 backdrop-blur-sm' 
            : 'bg-transparent'
        }
      `}>
      <div className="w-full py-2 flex justify-between items-center px-6 md:px-12"> {/* Increased vertical and horizontal padding */}
        
        {/* 🔰 Logo on the left */}
        <Link to="/" className="flex items-center"> {/* Use Link for navigation */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain 
                      hover:scale-110 transition-transform duration-300 
                      brightness-125 drop-shadow-lg"
          />
        </Link>

        {/* 🖥 Desktop Navigation on the right */}
        <div className="hidden md:flex items-center gap-10"> {/* Increased gap */}
            {/* {NavLinks.map(({ id, name, link }) => ( */}

          <ul className="flex items-center gap-10"> {/* Increased gap */}
              <li  className="flex items-center">
                <Link to="/" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Home
                  </button>
                </Link>
              </li>
              
              <li  className="flex items-center">
                <Link to="/news" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            News
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/credits" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            credits
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/showcase" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Showcase
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/content" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Content
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/showcase" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Partners
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/showcase" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Shop
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/contact" className="group flex items-center"> {/* Use Link for navigation */}
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Contact
                  </button>
                </Link>
              </li>
              {/* <li  className="flex items-center">
                <Link to="https://store.steampowered.com/" className="group flex items-center">
                  
                  <button className="font-custom text-3xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Wishlist
                  </button>
                </Link>
              </li> */}
              
              
          </ul>
             {/* ))}  */}

          <a href="#" className="ml-3 flex items-center "> {/* Increased margin left */}
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-10 md:h-16 w-auto hover:scale-110 
                          transition-transform duration-300 drop-shadow"
            />
            {/* <button className="font-custom text-3xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Buy The Game 
            </button> */}
          </a>
        </div>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleMenu} aria-label="Menu Toggle">
            {showMenu ? (
              <HiMenuAlt1 size={24} className="transition-transform hover:scale-110" />
            ) : (
              <HiMenuAlt3 size={24} className="transition-transform hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-12 left-0 w-full bg-transparent transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-3 gap-3"> {/* Increased vertical padding and gap */}
          {NavLinks.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              onClick={handleLinkClick}
              className="block"
            >
              <img
                src={home}
                alt={name}
                className="h-6 w-auto hover:scale-110 transition-transform duration-300" // Increased height
              />
            </Link>
          ))}
          <a href="#" onClick={handleLinkClick}>
            <img
              src={BuyTheGameButton}
              alt="Buy the Game"
              className="h-6 w-auto hover:scale-110 transition-transform duration-300" // Increased height
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
