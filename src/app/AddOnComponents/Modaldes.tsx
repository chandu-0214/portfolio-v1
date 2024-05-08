import React from "react";

const Modaldes = (props: any) => {
  return (
    <>
      <h2 className="font-bold text-md text-gray-300 underline decoration-designColor  decoration-1  underline-offset-8  ">
        {props?.modalttile}
      </h2>
      <ul role="list" className="list-disc ml-3 mt-4">
        {props?.modalDes.map((modal: any, index: any) => (
          <li className="mb-2" key={index}>
            {modal}
          </li>
        ))}
      </ul>
      {props?.modalttileAdd && (
        <h2 className="font-bold text-md text-gray-300 underline decoration-designColor  decoration-1  underline-offset-8  ">
          {props?.modalttileAdd}
        </h2>
      )}
      {props?.modalDesAdd && (
        <ul role="list" className="list-disc mt-4">
          {props?.modalDesAdd.map((modal: any, index: any) => (
            <li className="mb-2" key={index}>
              {modal}
            </li>
          ))}
        </ul>
      )}
      {props.links && (
        <a
          href={props?.links}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold link text-designColor"
        >
          Visit
        </a>
      )}
    </>
  );
};

export default Modaldes;
