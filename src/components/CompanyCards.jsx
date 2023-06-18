import React from "react";
import Link from "next/link";

const CompanyCards = ({}) => {
  return (
    <div className="xxs:w-screen  items-center flex flex-col gap-8 justify-center ">
      <div className="grid lg:grid-cols-2 xxs:grid-cols-1 grid-cols-2 gap-8 px-4 items-center w-screen xxs:max-w-[100%] text-white opacity-80 h-full">
        {/* Image */}
        <Link
          href="https://jobsrus.com.au/"
          target="_blank"
          className="h-full w-full flex justify-center items-center hover:opacity-[50%] hover:bg-blend-overlay  border-white border-opacity-50 px-2 hover:scale-105 transition-all duration-300 ease-in-out bg-white bg-opacity-0 hover:bg-opacity-20"
        >
          <div
            className={`flex  bg-white w-[300px] rounded-full h-[200px] justify-center shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
          >
            <img
              src="/jobsruslogo.png"
              alt="JobsRUs"
              className=" object-contain rounded-lg w-[150px]"
            />
          </div>
        </Link>
        {/* Image */}
        <Link
          href="https://enaya.com.au/"
          target="_blank"
          className="h-full w-full flex justify-center items-center hover:opacity-[50%] hover:bg-blend-overlay  px-2 hover:scale-105 transition-all duration-300 ease-in-out bg-white bg-opacity-0 hover:bg-opacity-20"
        >
          <div
            className={`flex  bg-white w-[300px] rounded-full h-[200px] justify-center shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer `}
          >
            <img
              src="/enaya.webp"
              alt="Enaya"
              className=" object-contain rounded-lg w-[150px]  "
            />
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CompanyCards;
