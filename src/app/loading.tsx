import React from "react";
import { MultiStepLoaderDemo } from "./AddOnComponents/MultiStepLoaderDemo";
import { loadingImg } from "./assets";

const loading = () => {
  return (
    <div className="bg-loadingImage">
      <MultiStepLoaderDemo />
    </div>
  );
};

export default loading;
