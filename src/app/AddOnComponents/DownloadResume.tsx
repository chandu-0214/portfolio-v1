import React from "react";
import { FiSend } from "react-icons/fi";
import { BsCloudLightningFill } from "react-icons/bs";

const DownloadResume = () => {
  return (
    <div>
      <div className="flex h-14">
        <a
          href={"#"}
          target="_blank"
          className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
          rel="noreferrer"
        >
          <button className="w-full h-full flex justify-center items-center gap-2">
            Download CV <BsCloudLightningFill />
          </button>
        </a>
        <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
          Contact me <FiSend />
        </button>
      </div>
    </div>
  );
};

export default DownloadResume;
