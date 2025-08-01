import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Hero2 from "./Components/Hero/Hero2";
import Quotes from "./Components/Quotes/Quotes";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Banner3 from "./Components/Banner/Banner3";
import Features from "./Components/Features/Features";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";
import PopupPlayer from "./Components/PopupPlayer/PopupPlayer";
import Testimonials from "./Components/Testimonials/Testimonials";
import Banner5 from "./Components/Banner/Banner5";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner6 from "./Components/Banner/Banner6";
import Banner7 from "./Components/Banner/Banner7";
const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay} /> 
      {/* <Hero2 togglePlay={togglePlay} /> */}
      <Quotes /> 
      <Banner togglePlay={togglePlay} />
      <Banner3 togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Banner5 togglePlay={togglePlay}/>
      <Banner6 togglePlay={togglePlay}/>
      <div className="bg-black min-h-screen">
      <Testimonials/>
    </div>
      <Features />
      {/* <AppStore />  */}
      <Banner7 togglePlay={togglePlay}/>
      <Footer />

      {/* Video Player */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  );
};

export default App;
