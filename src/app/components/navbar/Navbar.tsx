"use client";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaMobile, FaGlobe, FaCode } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import Image from "next/image";
import { Personaldetails, socialLinks } from "@/app/constants/constants";
import Link from "next/link";
import CountdownComponent from "@/app/AddOnComponents/CountdownComponent";
import DownloadResume from "@/app/AddOnComponents/DownloadResume";
import { calculateYearsAndMonthsSinceStartJob } from "@/app/utils/workingYearCal";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const yearsAndMonthsSinceStartJob = calculateYearsAndMonthsSinceStartJob();

  return (
    <div className="w-full h-18 p-2  sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="w-12 h-12 ml-3 flex items-center justify-center">
        <LinkScroll
          activeClass="active"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaCode className="text-4xl ml-7 mr-2 hover:text-designColor" />
        </LinkScroll>
        <p className=" text-designColor font-semibold">Chandu</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <LinkScroll
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </LinkScroll>
            </li>
          ))}
          <DownloadResume />
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-auto overflow-scroll absolute top-0 left-0 mt-2 bg-gray-900 p-4 scrollbar-show">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <LinkScroll
                    activeClass="active"
                    to={"home"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <FaCode className="text-2xl ml-4 mr-2 hover:text-designColor" />
                  </LinkScroll>
                  <p className=" text-designColor text-md font-semibold">
                    Chandu
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {Personaldetails?.description1}
                  <CountdownComponent
                    min={0}
                    max={yearsAndMonthsSinceStartJob}
                    delay={40}
                  />
                  {Personaldetails?.description2}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <LinkScroll
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </LinkScroll>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="inline">
                      <Link
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                      >
                        <span className="bannerIconsocial">
                          <link.icon />
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <DownloadResume />
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
