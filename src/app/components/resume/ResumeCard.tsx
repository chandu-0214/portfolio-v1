"use client";
import Modaldes from "@/app/AddOnComponents/Modaldes";
import React, { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

const ResumeCard = ({
  title,
  subTitle,
  result,
  des,
  modalDes,
  modalttile,
  links,
  modalDesAdd,
  modalttileAdd,
}: any) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div className="w-full h-auto group flex">
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box bg-[#23272b]">
          <div className="flex justify-start gap-3 mt-3 items-center">
            <h3 className="font-bold text-lg text-gray-300">{title}</h3>
          </div>
          <div className="flex justify-start gap-3 items-center">
            <p className="text-sm mt-2 text-gray-300">{subTitle}</p>
          </div>
          <div className="w-full h-[2px] mt-2 bg-designColor"></div>
          <p className="py-4">{des}</p>
          <Modaldes
            modalDes={modalDes}
            modalttile={modalttile}
            links={links}
            modalDesAdd={modalDesAdd}
            modalttileAdd={modalttileAdd}
          />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => modalRef.current?.close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 text-designColor top-0 m-2 text-lg"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 inline text-designColor bg-black bg-opacity-25 rounded-lg  justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 overflow-hidden line-clamp-3">
          {des}
        </p>
        <span className="text-2xl text-designColor xs:mt-1 md:mt-0 cursor-pointer">
          <HiArrowRight onClick={openModal} />
        </span>
      </div>
    </div>
  );
};

export default ResumeCard;
