import React from "react";

import Title from "../layouts/Title";
import Card from "./Card";
import { cardFeaturedData } from "@/app/constants/constants";
import { FaMobile, FaGlobe, FaCode } from "react-icons/fa";
import { AiFillAppstore, AiOutlineAntDesign } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { RiSketching } from "react-icons/ri";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do !" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {cardFeaturedData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            des={card.des}
            icon={getIcon(card.icon)}
          />
        ))}
      </div>
    </section>
  );
};
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "AiFillAppstore":
      return <AiFillAppstore />;
    case "SiProgress":
      return <SiProgress />;
    case "FaMobile":
      return <FaMobile />;
    case "SiAntdesign":
      return <SiAntdesign />;
    case "FaGlobe":
      return <FaGlobe />;
    case "FaCode":
      return <FaCode />;
    case "AiOutlineAntDesign":
      return <AiOutlineAntDesign />;
    case "GiTeacher":
      return <GiTeacher />;
    case "GrUserManager":
      return <GrUserManager />;
    case "RiSketching":
      return <RiSketching />;
    default:
      return null;
  }
};

export default Features;
