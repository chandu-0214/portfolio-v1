import React from "react";
import { IoCloudDownload } from "react-icons/io5";

const DownloadResume = () => {
  return (
    <div>
      <div className="flex h-8">
        <a
          href={"/assets/resume/Nandiki_Chandrashekhar.pdf"}
          target="_blank"
          className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
          rel="noreferrer"
        >
          <button className=" flex justify-center items-center gap-2">
            <IoCloudDownload className="w-8 h-8" /> Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;
