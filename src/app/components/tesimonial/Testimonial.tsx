"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import Image from "next/image";
import { quote } from "@/app/AddOnComponents";
import { testimonialsData } from "@/app/constants/constants";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full h-auto py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="h-auto md:w-3/4 xs:w-[90%] mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="w-3/4 h-auto">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-center">
                <div className="w-auto h-auto flex flex-col justify-between">
                  <Image
                    className="w-15 h-15"
                    src={quote}
                    width={50}
                    height={50}
                    alt="quote"
                  />
                  <div className="w-full h-auto py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col md:flex-row justify-center md: items-center gap-4 lgl:gap-8">
                    <div className="flex justify-between md:flex-col md:gap-3 lgl:items-center md:w-2/3 py-6 border-b-2 border-b-gray-900">
                      <Image
                        className="w-20 h-20 rounded-full mr-5"
                        src={testimonial.imgSrc}
                        alt={`testimonial-${index + 1}`}
                      />
                      <div className="w-full flex gap-1 flex-col justify-end items-center">
                        <h3 className="text-xl font-bold">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm tracking-wide text-gray-400">
                          {testimonial.position}
                        </p>
                        <p className="text-xs font-semibold uppercase text-designColor tracking-wide mb-2">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-base md:mx-6 font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
