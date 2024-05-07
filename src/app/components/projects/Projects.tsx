"use client";
import React, { useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectsData } from "@/app/constants/constants";
import Tab from "@/app/AddOnComponents/TabsComponent";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const tabsData = [
    {
      title: "Completed",
      projects: projectsData.filter((item) => item.isComplete),
    },
    {
      title: "In Progress",
      projects: projectsData.filter((item) => !item.isComplete),
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="flex justify-center mt-1">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            onClick={() => handleTabClick(index)}
            isActive={activeTab === index}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-1">
        {tabsData[activeTab].projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            webLink={project.webLink}
            isNew={project?.isNew}
            modalDes={project.modalDes}
            modalttile={project.modalttile}
            links={project.links || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
