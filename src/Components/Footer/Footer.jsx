import React, { useState } from "react";
import {
  FaRedditAlien,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import logo1 from "../../assets/logo/Logo1.png";
import logo2 from "../../assets/logo/Logo2.png";
import logo3 from "../../assets/logo/Logo3.png";
import logo4 from "../../assets/logo/Logo4.png";

const socialLinks = [
  { id: 1, icon: <FaRedditAlien size={36} />, label: "REDDIT", url: "https://www.reddit.com/user/RevolverRift/" },
  { id: 2, icon: <FaYoutube size={36} />, label: "YOUTUBE", url: "https://www.youtube.com/@revolverrift" },
  { id: 3, icon: <FaTwitter size={36} />, label: "TWITTER", url: "https://x.com/RevolverRift" },
  { id: 4, icon: <FaFacebook size={36} />, label: "FACEBOOK", url: "https://www.facebook.com/revolverrift" },
  {
    id: 5,
    icon: (
      <FaInstagram
        size={36}
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #f4e6d8 0%, #e5bf94 45%, #b7895e 60%, #7c4a2e 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />
    ),
    label: "INSTAGRAM",
    url: "https://www.instagram.com/revolverrift/",
  },
];

const ImprintIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background:
        "radial-gradient(circle at 30% 107%, #f4e6d8 0%, #e5bf94 45%, #b7895e 60%, #7c4a2e 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    <path
      d="M7 3H17C17.5523 3 18 3.44772 18 4V20L12 17L6 20V4C6 3.44772 6.44772 3 7 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <style>{`
        @keyframes vintageFadeIn {
          0% {opacity: 0; transform: translateY(20px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Imprint Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#1b1b1b] text-[#bca78d] rounded-2xl shadow-xl p-6 w-full max-w-lg animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold tracking-wide text-[#e5cfac]">Company Imprint</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#c5a57c] hover:text-[#f4d8b4] text-xl"
              >
                &times;
              </button>
            </div>
            <div className="text-sm space-y-1 font-light tracking-wide text-left">
              <p><strong>Kahr Works GmbH</strong></p>
              <p>Bobletten 23, 6850 Dornbirn, Austria</p>
              <p>Email: <a href="mailto:office@kahrworks.at" className="hover:text-[#e8d6bc]">office@kahrworks.at</a></p>
              <p>Website: <a href="https://www.kahrworks.at" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8d6bc]">www.kahrworks.at</a></p>
              <p>USt-IdNr.: AT U75459914</p>
              <p>Registernummer: FN531874v</p>
              <p>Registergericht: Landesgericht Feldkirch</p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-black text-[#4b3a2f] pt-16 pb-8 px-6 font-serif select-none flex flex-col justify-center items-center min-h-[500px]">

        {/* Social Section */}
        <div
          className="max-w-7xl w-full rounded-2xl p-12 mb-10 mx-4 md:mx-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 227, 200, 0.25), rgba(231, 207, 166, 0.15))",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 0 40px rgba(0, 0, 0, 0.4)",
            animation:
              "vintageFadeIn 1.2s ease-out forwards, gentleFloat 6s ease-in-out infinite",
            opacity: 0,
          }}
        >
          <div className="flex flex-col items-center gap-10">
            <h2 className="font-extrabold text-4xl uppercase text-center tracking-widest leading-tight text-[#f4d8b4]">
              CONNECT <br /> WITH US
            </h2>

            <div className="flex flex-wrap justify-center gap-12">
              {socialLinks.map(({ id, icon, label, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-sm hover:text-[#a8734c] transition duration-300 ease-in-out"
                  style={{
                    animation: `vintageFadeIn 1s ease-out forwards`,
                    animationDelay: `${id * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <span className="inline-block">{icon}</span>
                  <span className="mt-2 font-semibold tracking-wider text-[#e8d6bc]">
                    {label}
                  </span>
                </a>
              ))}

              {/* Imprint Button */}
              <button
                onClick={() => setShowModal(true)}
                className="flex flex-col items-center text-sm hover:text-[#a8734c] transition duration-300 ease-in-out"
                style={{
                  animation: `vintageFadeIn 1s ease-out forwards`,
                  animationDelay: `${socialLinks.length * 0.1 + 0.2}s`,
                  opacity: 0,
                }}
              >
                <span className="inline-block">
                  <ImprintIcon />
                </span>
                <span className="mt-2 font-semibold tracking-wider text-[#e8d6bc]">
                  IMPRINT
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Logo Strip (responsive grid; visually consistent sizes) */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 grid grid-cols-2 sm:grid-cols-4 place-items-center gap-8 sm:gap-12">
              {[logo1, logo2, logo3, logo4].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square w-24 sm:w-28 md:w-32 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Partner Logo ${i + 1}`}
                    className={`max-h-full max-w-full object-contain opacity-95 hover:opacity-100 transition
                      ${i === 2 || i === 3 ? 'scale-90 sm:scale-95' : ''}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-6 text-xs text-[#725640] tracking-widest">
          <a
            href="https://www.kahrworks.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; KAHRWORKS GMBH – All rights reserved.
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
