"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CustomMediaQuery from "../app/Queries/CustomMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import {motion, AnimatePresence} from "framer-motion";

const Navbar = () => {
  const hamburgerMenu = CustomMediaQuery("(max-width: 1179px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const variants = {
    visible: { x: "0%" },
    hidden: { x: "-100%" },
    exit: { x: "-100%" },
    exitActive: { x: 0 },
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor("#1f2937");
        setTextColor("#f3f4f6");
      } else {
        setColor("transparent");
        setTextColor("#f3f4f6");
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      {!hamburgerMenu ? (
        <nav
          style={{
            backgroundColor: color,
            color: textColor,
            transition: "background-color 0.3s",
          }}
          className={`fixed top-0 w-screen text-lg text-white flex px-10 py-4 justify-center items-center z-40 shadow-sm  `}
        >
          <div className=" flex justify-between w-full max-w-[1400px]">
            <div className="min-w-[200px]">
              <img src="/helogo.png" className="max-w-[80px]" />
            </div>

            <div className="flex justify-center items-center gap-4 ">
          
              <Link href="https://jobsrus.com.au/" target="_blank">
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300 text-[#2F3D9A] font-bold text-xl ">
                  JobsRUs
                </div>
              </Link>
              <Link href="https://enaya.com.au/" target="_blank">
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300 text-[#8F53A1] font-bold text-xl">
                  Enaya
                </div>
              </Link>
            </div>
          
          </div>
        </nav>
      ) : (
        <nav
          className="fixed top-0 w-screen bg-gray-900  text-lg text-white  flex px-5 py-4  justify-between items-center z-40"
          style={{
            backgroundColor: color,
            color: textColor,
            transition: "background-color 0.3s",
          }}
        >
          <button
            className="rounded-full ml-5 mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            <MenuRounded />{" "}
          </button>
          {isMenuToggled && (
            <AnimatePresence>
              {/* MOBILE MENU POPUP */}
              {isMenuToggled && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit="exit"
                  className="fixed left-0 top-0 bottom-0 height[100%] bg-lavender p-2 w-[300px] transition-300 shadow-md  bg-gray-800 "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col gap-10 ml-5 text-2xl  text-primary font-semibold max-w-screen">
                  <Link href="https://jobsrus.com.au/" target="_blank">
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300 text-[#2F3D9A] font-bold text-xl ">
                  JobsRUs
                </div>
              </Link>
              <Link href="https://enaya.com.au/" target="_blank">
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300 text-[#8F53A1] font-bold text-xl">
                  Enaya
                </div>
              </Link>
            
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;