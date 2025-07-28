import React from "react";
import {
  FaDiscord,
  FaRedditAlien,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaDiscord size={36} className="text-[#705D56]" />, label: "DISCORD", url: "#" },
  { id: 2, icon: <FaRedditAlien size={36} className="text-[#B35900]" />, label: "REDDIT", url: "#" },
  { id: 3, icon: <FaYoutube size={36} className="text-[#A12B2B]" />, label: "YOUTUBE", url: "#" },
  { id: 4, icon: <FaTwitch size={36} className="text-[#6F52AE]" />, label: "TWITCH", url: "#" },
  { id: 5, icon: <FaTwitter size={36} className="text-[#4A708B]" />, label: "TWITTER", url: "#" },
  { id: 6, icon: <FaFacebook size={36} className="text-[#46536B]" />, label: "FACEBOOK", url: "#" },
  {
    id: 7,
    icon: (
      <FaInstagram
        size={36}
        className="text-gradient"
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #f4e6d8 0%, #e5bf94 45%, #b7895e 60%, #7c4a2e 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />
    ),
    label: "INSTAGRAM",
    url: "#",
  },
  { id: 8, icon: <FaEnvelope size={36} className="text-[#7A392F]" />, label: "MAIL", url: "#" },
];

const quickLinks1 = [
  { id: 1, title: "HOME", url: "#" },
  { id: 2, title: "COMMUNITY", url: "#" },
  { id: 3, title: "BLOG", url: "#" },
];

const quickLinks2 = [
  { id: 1, title: "PC REQUIREMENTS", url: "#" },
  { id: 2, title: "SERVER LINKS", url: "#" },
  { id: 3, title: "EULA STATEMENT", url: "#" },
];

const styles = `
@keyframes vintageFadeIn {
  0% {opacity: 0; transform: translateY(20px);}
  100% {opacity: 1; transform: translateY(0);}
}
@keyframes flickerGlow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(255, 215, 140, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(255, 190, 100, 0.7));
  }
}
@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
`;

const Footer = () => {
  return (
    <>
      <style>{styles}</style>

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
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10">
            <h2 className="font-extrabold text-4xl uppercase max-w-xs tracking-widest leading-tight text-[#f4d8b4]">
              CONNECT <br /> WITH US
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-10 flex-1">
              {socialLinks.map(({ id, icon, label, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-sm cursor-pointer hover:text-[#8f451a] transition duration-300 ease-in-out"
                  style={{
                    animation: `vintageFadeIn 1s ease-out forwards`,
                    animationDelay: `${id * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <span className="inline-block" style={{ animation: "flickerGlow 4s infinite" }}>
                    {icon}
                  </span>
                  <span className="mt-2 font-semibold tracking-wider">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Quick Links and Support */}
          <div className="flex flex-col md:flex-row justify-between text-[#3b2d1f] text-sm mt-14 select-text">
            <div className="flex gap-20 mb-10 md:mb-0">
              <div>
                <h3 className="mb-5 font-semibold text-[#3e2d20] tracking-wide border-b border-[#b4956b] pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks1.map(({ id, title, url }) => (
                    <li key={id}>
                      <a href={url} className="hover:text-[#a85d1d] transition duration-300">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-5 font-semibold text-[#3e2d20] tracking-wide border-b border-[#b4956b] pb-2">
                  More Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks2.map(({ id, title, url }) => (
                    <li key={id}>
                      <a href={url} className="hover:text-[#a85d1d] transition duration-300">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <a
                href="#"
                className="border border-[#8a5e34] px-7 py-2 font-semibold text-[#8a5e34] hover:bg-[#8a5e34] hover:text-[#fdf3e1] transition rounded tracking-wider shadow-[0_0_8px_rgba(138,94,52,0.7)] hover:shadow-[0_0_14px_rgba(138,94,52,1)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET SUPPORT &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* ⬇️ Copyright */}
        <div className="w-full text-center mt-6 text-xs text-[#725640] tracking-widest">
          &copy; KAHRWORKS GMBH – All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
