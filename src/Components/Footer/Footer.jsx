import React from "react";
import {
  FaRedditAlien,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

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
          background: "radial-gradient(circle at 30% 107%, #f4e6d8 0%, #e5bf94 45%, #b7895e 60%, #7c4a2e 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />
    ),
    label: "INSTAGRAM",
    url: "https://www.instagram.com/revolverrift/",
  },
];

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes vintageFadeIn {
          0% {opacity: 0; transform: translateY(20px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <footer className="bg-black text-[#4b3a2f] pt-16 pb-12 px-6 font-serif select-none flex flex-col justify-center items-center min-h-[400px]">
        <div
          className="max-w-7xl w-full rounded-2xl p-12 mb-4 mx-4 md:mx-8"
          style={{
            background: "linear-gradient(135deg, rgba(245, 227, 200, 0.25), rgba(231, 207, 166, 0.15))",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 235, 200, 0.2)",
            boxShadow: "0 0 40px rgba(0, 0, 0, 0.4)",
            animation: "vintageFadeIn 1.2s ease-out forwards, gentleFloat 6s ease-in-out infinite",
            opacity: 0,
          }}
        >
          {/* Top Connect Section */}
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
                  <span className="inline-block">
                    {icon}
                  </span>
                  <span className="mt-2 font-semibold tracking-wider text-[#e8d6bc]">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-6 text-xs text-[#725640] tracking-widest">
          &copy; KAHRWORKS GMBH – All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
