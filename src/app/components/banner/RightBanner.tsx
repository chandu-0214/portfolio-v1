"use client";
import React, { useState } from "react";
import { bannerImg } from "../../assets/index";
import Image from "next/image";

const RightBanner = () => {
  const [loaded, setLoaded] = useState(false);
  const photoUrl =
    "https://res.cloudinary.com/dweagif0l/image/upload/v1714702874/1000177109-removebg_zuopa2.png";
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Image
        // className="w-[300px] h-[350px] lgl:w-[500px] lgl:h-[550px] z-10 object-cover"
        src={photoUrl}
        alt="bannerImg"
        width={1000}
        height={1000}
        onLoad={() => setLoaded(true)}
        className={`w-[300px] h-[350px] lgl:w-[600px] lgl:h-[500px] z-10 object-cover ${
          loaded ? "blur-none" : "blur-sm"
        } `}
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[600px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
