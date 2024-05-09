import React from "react";

const loading = () => {
  return (
    <div className="bg-loadingImage flex justify-center items-center top-1/2 mt-20">
      <span className="loading loading-spinner loading-sm text-designColor"></span>
    </div>
  );
};

export default loading;
