"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  BestSkill,
  Personaldetails,
  socialLinks,
} from "@/app/constants/constants";
import Link from "next/link";
import CountdownComponent from "@/app/AddOnComponents/CountdownComponent";
import { calculateYearsAndMonthsSinceStartJob } from "@/app/utils/workingYearCal";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer.", "Professional Coder.", "UI Designer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  const yearsAndMonthsSinceStartJob = calculateYearsAndMonthsSinceStartJob();

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="md:text-6xl  xs:text-1xl sm:text-2xl font-bold text-white">
          Hi, I am{" "}
          <span className="text-designColor capitalize">Chandrashekhar</span>{" "}
          <p className="md:text-4xl xs:text-xl sm:text-1xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </p>
        </h1>

        <p className="text-base text-start font-bodyFont leading-6 tracking-wide">
          {Personaldetails?.description1}
          <CountdownComponent min={0} max={yearsAndMonthsSinceStartJob} />
          {Personaldetails?.description2}
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <div key={index} className="inline">
                <Link href={link.href} target={link.target} rel={link.rel}>
                  <span className="bannerIconsocial">
                    <link.icon />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-1">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            {BestSkill.map((Skill, i) => (
              <span key={i} className="bannerIcon">
                <Skill />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
