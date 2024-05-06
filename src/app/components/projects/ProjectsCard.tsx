import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { projectOne } from "@/app/AddOnComponents";

const ProjectsCard = ({
  title,
  des,
  src,
  webLink,
  githubLink,
  isNew = false,
}: any) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg relative">
        {!src ? (
          <Image
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={projectOne}
            alt="src"
          />
        ) : (
          <Image
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt="src"
          />
        )}
        {isNew && (
          <span className="bg-green-500 text-black py-2 px-3 rounded-full absolute top-2 right-2 xs:text-xs md:text-sm z-10">
            New
          </span>
        )}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && (
                <Link
                  href={githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </Link>
              )}
              {webLink && (
                <Link
                  href={webLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
