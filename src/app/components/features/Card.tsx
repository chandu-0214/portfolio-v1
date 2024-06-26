"use client";
import Modaldes from "@/app/AddOnComponents/Modaldes";
import React, { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon, modalttile, modalDes }: any) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box bg-[#23272b]">
          <div className="flex justify-start gap-3 mt-3 items-center">
            {icon && <span className="text-3xl text-designColor">{icon}</span>}
            <h3 className="font-bold text-lg text-gray-300">{title}</h3>
          </div>
          <div className="w-full h-[2px] mt-2 bg-designColor"></div>
          <p className="py-4">{des}</p>
          <Modaldes modalDes={modalDes} modalttile={modalttile} />
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
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base overflow-hidden line-clamp-3">{des}</p>
            <span className="text-2xl text-designColor cursor-pointer">
              <HiArrowRight onClick={openModal} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
