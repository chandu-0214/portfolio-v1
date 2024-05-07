"use client";
import React, { useReducer } from "react";
import Title from "../layouts/Title";
import Skills from "./Skills";
import CategoryCard from "./CategoryCard";
import {
  AchievementData,
  EducationData,
  WorkExperienceData,
} from "@/app/constants/constants";
import { calculateYearsAndMonthsSinceStartJob } from "@/app/utils/workingYearCal";

const initialState = {
  selectedData: "experienceData",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        selectedData: action.payload,
      };
    default:
      return state;
  }
};

const Resume = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const yearsAndMonthsSinceStartJob = calculateYearsAndMonthsSinceStartJob();

  const listItems = [
    { key: "educationData", text: "Education" },
    { key: "skillData", text: "Professional Skills" },
    { key: "experienceData", text: "Experience" },
    { key: "achievementData", text: "Achievements" },
  ];
  const handleItemClick = (dataType: any) => {
    dispatch({ type: "SET_DATA", payload: dataType });
  };
  return (
    <section id="resume" className="w-full py-10 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title={`${yearsAndMonthsSinceStartJob}+ YEARS OF EXPERIENCE`}
          des="Experience"
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {listItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleItemClick(item.key)}
              className={`${
                state.selectedData === item.key
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi mr-3 mb-3`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      {state.selectedData === "educationData" && (
        <CategoryCard
          resumeData={EducationData}
          dataTitle={"2012 - 2018"}
          headingTitle={"Education"}
        />
      )}
      {state.selectedData === "skillData" && <Skills />}
      {state.selectedData === "achievementData" && (
        <CategoryCard
          resumeData={AchievementData}
          dataTitle={"1998 - 2010"}
          headingTitle={"Achievement"}
        />
      )}
      {state.selectedData === "experienceData" && (
        <CategoryCard
          resumeData={WorkExperienceData}
          dataTitle={"2021 - Present"}
          headingTitle={"Job Experience"}
        />
      )}
    </section>
  );
};

export default Resume;
