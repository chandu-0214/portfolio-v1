import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import { Metadata } from "next";
import { calculateYearsAndMonthsSinceStartJob } from "../utils/workingYearCal";

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

export const metadata: Metadata = {
  title: "Welcome to my World",
  description: `Chandu brings over ${calculateYearsAndMonthsSinceStartJob}+ years of hands-on experience in crafting robust web applications, coupling technical prowess with an insatiable hunger for growth.`,
};

export default PortfolioPage;
