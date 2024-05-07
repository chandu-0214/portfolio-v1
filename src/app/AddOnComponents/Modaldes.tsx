import React from "react";

const Modaldes = (props: any) => {
  return (
    <>
      <h2 className="font-bold text-md text-gray-300 underline decoration-designColor  decoration-1  underline-offset-8  ">
        {props?.modalttile}
      </h2>
      <ul role="list" className="list-disc mt-4">
        {props?.modalDes.map((modal: any, index: any) => (
          <li className="mb-2" key={index}>
            {modal}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Modaldes;
