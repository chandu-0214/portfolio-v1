import { FooterLinksData } from "@/app/constants/constants";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      {FooterLinksData.map((section, index) => (
        <div key={index} className="w-full h-full">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            {section.title}
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-4">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {link}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
