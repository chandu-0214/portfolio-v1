import React from "react";
import { BsCloudLightningFill } from "react-icons/bs";

const DownloadResume = () => {
  return (
    <div>
      <div className="flex h-8">
        <a
          href={"/assets/resume/Nandiki_Chandrashekhar_(2.6+).pdf"}
          target="_blank"
          className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
          rel="noreferrer"
        >
          <button className=" flex justify-center items-center gap-2">
            <BsCloudLightningFill className="w-8 h-8" /> Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;
