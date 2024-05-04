import React from "react";

import "slick-carousel/slick/slick.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Features from "../components/features/Features";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Testimonial from "../components/tesimonial/Testimonial";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";
import ScrollBtn from "../AddOnComponents/ScrollBtn";

const PortfolioPage = () => {
  return (
    <div className="w-auto h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default PortfolioPage;
