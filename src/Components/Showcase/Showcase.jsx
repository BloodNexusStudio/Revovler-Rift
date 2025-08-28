import { useState } from "react";
import GunsShowcase from "./GunsShowcase";

import image6 from "../../assets/shot2.1.png";
import image7 from "../../assets/shot2.png";
import image8 from "../../assets/newassets/9.png";
import image9 from "../../assets/newassets/2.png";
import image10 from "../../assets/newassets/6.png";
import bgImage from '../../assets/Texturelabs_Grunge_353M.jpg';

const Showcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-6 px-6 bg-black pt-36"
     style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex w-full justify-between items-center gap-4">
        {[image6, image7, image8].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`image-${idx}`}
            onClick={() => handleImageClick(img)}
            className="flex-1 object-cover h-64 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>

      <div className="flex w-full justify-between items-center gap-4">
        {[image9, image10].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`image-${idx + 3}`}
            onClick={() => handleImageClick(img)}
            className="flex-1 object-cover h-64 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>

      <GunsShowcase />

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Showcase;
