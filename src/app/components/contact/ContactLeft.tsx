import { sideNavLinks, socialLinks } from "@/app/constants/constants";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-bold text-white">
          Chandrashekhar{" "}
          <p className="text-lg font-normal text-gray-400">
            Front End Developer
          </p>
        </span>
        <div className="text-base flex justify-start gap-2 items-center tracking-wide">
          <PiHandshakeFill className="w-8 h-8 text-designColor align-self-center " />
          <p>Get in Touch !</p>
        </div>
        <p>
          {`I believe in the power of connection. Whether you have questions
            about my work, want to discuss a potential project, or just want to
            say Hello, I'd love to hear from you. Feel free to reach out through
            the contact form, and I'll get back to you as soon as
            possible. Your message matters to me, and I'm here to listen.`}
        </p>
      </div>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="inline">
            <span className="bannerIconsocial">
              <link.icon />
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {sideNavLinks.map((link: any, index: number) => (
          <div key={index} className=" flex justify-start gap-4 items-center">
            <span className="bannerIconsocial">
              <link.icon />
            </span>
            <div className="flex flex-col pr-1 leading-0 text-sm hover:font-semibold">
              <span className="mt-1 ">{link.label}</span>
              <span className="mb-1">{link.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLeft;
