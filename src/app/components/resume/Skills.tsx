import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/app/constants/constants";
import Tab from "@/app/AddOnComponents/TabsComponent";
import { FaDesktop, FaCode } from "react-icons/fa";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  const categoryIcons = {
    "Design Skill": <FaDesktop />,
    "Development Skill": <FaCode />,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20"
    >
      <div className="flex flex-col justify-center items-center text-center mt-2">
        <div className="flex  justify-center md:items-start flex-col lgl:flex-row gap-2 ">
          {skillsData.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              onClick={() => handleTabClick(index)}
              isActive={activeTab === index}
            />
          ))}
        </div>
        <div className="flex gap-4 flex-wrap mt-3">
          {skillsData[activeTab].skills.map((category, index) => (
            <div key={index} className="flex gap-4">
              <motion.span key={index} className="bannerIconSkill relative ">
                <div className="flex flex-col justify-between items-center">
                  <category.icon className="w-10 h-10 text-designColor opacity-95" />
                  <p className="text-sm mt-2 md:hidden text-lightText">
                    {category.name}
                  </p>
                </div>
                <motion.span
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-100  text-base rounded-lg font-bold "
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.span>
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
