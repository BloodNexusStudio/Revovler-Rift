import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import weapon1 from "../../assets/newassets/colt 19111.png";
import weapon2 from "../../assets/newassets/ice pick 3.png";
import weapon3 from "../../assets/newassets/Mosin Nagant 3.png";
import weapon4 from "../../assets/newassets/p08 2.png";
import weapon5 from "../../assets/newassets/trench gun 3.png";
import weapon6 from "../../assets/newassets/WINCHESTER1.png";

const weapons = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6];

export default function Showcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    let offset = 0;
    const speed = 0.5; // slower scrolling speed
    const loop = () => {
      if (containerRef.current) {
        offset += speed;
        containerRef.current.scrollLeft = offset;

        // Reset scroll when it reaches the end
        if (
          offset >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          offset = 0;
        }
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, []);

  return (
    <div className="bg-black py-10">
      <div
        ref={containerRef}
        className="relative flex overflow-x-scroll no-scrollbar gap-6 px-10"
        style={{
          scrollBehavior: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {weapons.concat(weapons).map((weapon, index) => (
          <motion.img
            key={index}
            src={weapon}
            alt={`weapon-${index}`}
            className="object-contain cursor-pointer rounded-xl"
            style={{
              width: "600px", 
              height: "300px", 
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
        ))}
      </div>
    </div>
  );
}
