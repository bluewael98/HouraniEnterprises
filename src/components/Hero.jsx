"use client";

import React from "react";
import { Carousel } from "flowbite-react";
import { HeroSectionSlides } from "./ComponentData";

const Hero = () => {
  return (
    <section className="flex flex-col  text-center justify-center  z-10 text-white w-screen items-center  h-full px-2 gap-3 md:max-w-[80%] max-w-[1500px] overflow-hidden fixed top-0">
      <h1 className="heading xxl:text-6xl sm:text-4xl xs:text-3xl xxs:text-xl text font-bold opacity-90">
        HOURANI ENTERPRISES
      </h1>
      <h1 className=" xxs:w-full  xxl:text-3xl sm:text-xl xxs:text-md opacity-90 xlg:max-w-[60%]">
        Hourani Enterprises trades & operates as{" "}
        <span className="text-[#2f3d9a] font-bold">JobsRUs</span> &{" "}
        <span className="text-[#8F53A1] font-bold">Enaya.</span>
      </h1>

      <Carousel
        className="max-w-[1000px]  relative max-h-[550px]   "
        slideInterval={5000}
        leftControl=" "
        rightControl=" "
        indicators={true}
      >
        {HeroSectionSlides.map((data, index) => (
          <>
            <img
              className="h-full w-full object-cover object-top rounded-lg shaow-lg opacity-95  md:max-h-[500px] lg:max-h-[500px]    "
              src={data.imgSrc}
              alt="herosectionimage"
              key={index}
            />
          </>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
