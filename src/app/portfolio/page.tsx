import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";

const Features = dynamic(() => import("../components/features/Features"));
const Projects = dynamic(() => import("../components/projects/Projects"));
const Resume = dynamic(() => import("../components/resume/Resume"));
const Testimonial = dynamic(
  () => import("../components/tesimonial/Testimonial")
);
const Contact = dynamic(() => import("../components/contact/Contact"));
const FooterBottom = dynamic(() => import("../components/footer/FooterBottom"));
const ScrollBtn = dynamic(() => import("../AddOnComponents/ScrollBtn"));

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
        <FooterBottom />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default PortfolioPage;
