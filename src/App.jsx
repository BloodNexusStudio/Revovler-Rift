import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // BrowserRouter is removed
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
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
import Banner8 from "./Components/Banner/Banner8";
import Banner9 from "./Components/Banner/Banner9";
import Banner10 from "./Components/Banner/Banner10";
import { NewsCardGrid, AllBlogsPage, BlogPostPage } from "./Components/Features/NewsCardGrid";
import Showcase from "./Components/Showcase/Showcase";
import Partners from "./Components/Partners/partners";

// This component handles scrolling to the top of the page on route changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
    // BrowserRouter is removed from here
    <>
      {/* Scroll to the top of the page whenever the route changes */}
      <ScrollToTop />
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Navbar />
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero togglePlay={togglePlay} />
                {/* <Banner togglePlay={togglePlay} /> */}
                {/* <Banner8 togglePlay={togglePlay} /> */}
                {/* <Banner9 togglePlay={togglePlay} /> */}
                {/* <Banner10 togglePlay={togglePlay} /> */}
                {/* <Banner3 togglePlay={togglePlay} /> */}
                {/* <Banner2 togglePlay={togglePlay} /> */}
                {/* <Testimonials /> */}
                {/* <NewsCardGrid /> */}
                {/* <Banner7 togglePlay={togglePlay} /> */}
                <Footer />
              </>
            }
          />
          {/* Blog Routes */}
          <Route path="/news" element={<Banner3 />} />
          <Route path="/credits" element={
            <>
              <Testimonials />
              <Banner7 />
            </>
          } />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/content" element={
            <>
              <Banner />
              <Banner8 />
              <Banner9 />
              <Banner10 />
              <NewsCardGrid />
            </>} />
          
          <Route path="/blogs" element={<AllBlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogPostPage />} />
        </Routes>
        <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
      </main>
    </>
  );
};

export default App;
