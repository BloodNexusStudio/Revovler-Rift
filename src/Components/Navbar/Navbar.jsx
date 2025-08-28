import React, { useState, useEffect } from "react";
import BuyTheGameButton from "../../assets/Group.png";
import redtexture from "../../assets/red.jpeg";
import logo from "../../assets/IMG_0983.png"; // 👈 Add your logo asset
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 1, name: "News", link: "/news" },
  { id: 1, name: "Credits", link: "/credits" },
  { id: 1, name: "Showcase", link: "/showcase" },
  { id: 1, name: "Content", link: "/content" },
  { id: 1, name: "Partners", link: "/partners" },
  { id: 1, name: "Shop", link: "/shop" },
  { id: 1, name: "Contact", link: "/contact" },

];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    <header className={`fixed w-full  text-white  z-40  `
    }
      style={{ backgroundImage: `url(${redtexture})` }}
    >
      
      <div className="w-full py-2 flex justify-between items-center px-6 md:px-12"> 
        
        {/* 🔰 Logo on the left */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain 
                      hover:scale-110 transition-transform duration-300 
                      brightness-125 drop-shadow-lg"
          />
        </Link>

        {/* 🖥 Desktop Navigation on the right */}
        <div 
        
        >
        <div className="hidden flex justify-center md:flex items-center gap-10"> 

          <ul className="flex items-center gap-10"> 
              <li 
      //         onClick={() => setClicked(!clicked)}
      //  className={`cursor-pointer ${clicked ? "text-gray-500" : "text-white"}`}
              >
                <Link to="/" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Home
                  </button>
                </Link>
              </li>
              
              <li  className="flex items-center">
                <Link to="/news" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            News
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/credits" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            credits
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/showcase" className="group flex items-center">
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Showcase
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/content" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Content
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/partners" className="group flex items-center">
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Partners
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/shop" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Shop
                  </button>
                </Link>
              </li>
              <li  className="flex items-center">
                <Link to="/contact" className="group flex items-center"> 
                  
                  <button className="font-custom text-2xl hover:scale-110 
                          transition-transform duration-300 drop-shadow">
                            Contact Us
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

          {/* <a href="#" className="ml-3 flex items-center ">
            <img
              src={BuyTheGameButton}              // Change the image to wishlist
              alt="Buy the Game"
              className="h-10 md:h-16 w-auto hover:scale-110 
                          transition-transform duration-300 drop-shadow"
            />
            
          </a> */}
        </div>
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
        <div className="flex flex-col items-center py-3 gap-2 bg-black"> {/* Increased vertical padding and gap */}
          {NavLinks.map(({ id, name, link }) => (
            <div className="font-custom text-lg">
              <Link
                key={id}
                to={link}
                onClick={handleLinkClick}
                className="block"
              >
               {name}
               </Link>
              
            </div>

            
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
