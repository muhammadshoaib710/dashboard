import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import client from "../assets/images/client1.jpg";

function Header() {
  return (
    <section className="w-full bg-white lg:h-20 h-fit flex lg:flex-row justify-between items-center p-4 rounded-xl lg:gap-2 gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
      </div>
      <div className="flex justify-between item-center gap-10">
        <IoSearch className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 translate-all" />
        <div id="client-info" className="flex justify-center item-center-gap-4">
          <img
            src={client}
            alt="client-image"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col justify-center item-start">
            <div className="flex justify-center item-center -mb-1 gap-2">
              <h1 className="text-sm font-semibold"> John Doe</h1>
              <IoIosArrowDown />
            </div>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
