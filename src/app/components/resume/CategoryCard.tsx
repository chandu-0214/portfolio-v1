import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const CategoryCard = ({ resumeData, dataTitle, headingTitle }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-11/12 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-4 lgl:py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{dataTitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{headingTitle}</h2>
        </div>
        <div className="mt-4 lgl:mt-7 xs:w-full md:w-9/12 h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeData.map((item: any, index: any) => (
            <ResumeCard
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
              links={item.links || ""}
              modalttile={item.modalttile || ""}
              modalDes={item.modalDes || []}
              modalDesAdd={item.modalDesAdd || false}
              modalttileAdd={item.modalttileAdd || ""}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
