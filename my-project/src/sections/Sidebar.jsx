import React, { useEffect, useState } from "react";
import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    link: "/dashboard",
  },
  {
    name: "Messages",
    icon: MdOutlineMessage,
    link: "/messages",
  },
  {
    name: "Analytics",
    icon: SiSimpleanalytics,
    link: "/analytics",
  },
  {
    name: "Settings",
    icon: IoSettingsSharp,
    link: "/settings",
  },
];
function Sidebar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [IsExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      animate={IsExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "w-1/5 bg-gray-950 h-screen flex flex-col justify-between items-center gap-10 relative" +
        (IsExpanded ? " py-8 px-6" : " py-8 px-6")
      }
    >
      <div className="flex flex-col justify-center items-center gap-8">
        {IsExpanded ? (
          <div id="logo-box">
            <h1 className="text-red-600 font-bold text-4xl">
              Debug<span className="italic text-yellow-500"> Entity</span>{" "}
            </h1>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-red-600 font-bold text-3xl">D</h1>
            <span className="italic text-yellow-500 text-3xl">E</span>
          </div>
        )}
        <div
          id="navlinks-box"
          className="flex flex-col justify-center items-start gap-5 w-full mt-5"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id="link-box"
                className={
                  "flex justify-center items-center w-full gap-4 py-4 px-4 rounded-xl cursor-pointer" +
                  (activeNavIndex === index
                    ? " bg-yellow-600 text-black"
                    : " text-white") +
                  (IsExpanded ? " px-6 py-2" : " p-2")
                }
                onClick={() => setActiveNavIndex(index)}
              >
                <div className="bg-yellow-300 text-black p-2 rounded-full">
                  <Icon className="md:w-6 w-4 h-4 md:h-6" />
                </div>
                <span
                  className={"text-lg" + (IsExpanded ? " flex" : " hidden")}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="expanded-icon"
        className="bg-yellow-500 text-black p-2 rounded-full cursor-pointer absolute -right-4 bottom-20 md:button-40 md:flex hidden "
        onClick={() => setIsExpanded(!IsExpanded)}
      >
        <FaArrowRight />
      </div>

      <div
        id="logout-box"
        className="w-full flex flex-col justify-start items-center gap-4 cursor-pointer"
      >
        <div className="bg-slate-700 w-full h-[0.5px]">
          <div className="flex justify-center items-center gap-2">
            <MdLogout className="text-white h-6 w-6" />
            <span
              className={
                "text-white text-lg" + (IsExpanded ? " flex" : " hidden")
              }
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Sidebar;
