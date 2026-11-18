import React from "react";
import { PiListChecksBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white p-2 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#5925f1] rounded-md">
          <PiListChecksBold className="text-white text-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">TaskFlow</h1>
          <p className="text-sm text-gray-400">
            Organize your day, beautifully.
          </p>
        </div>
      </div>

      <div className="p-2 bg-[#5925f1] rounded-md">
        <FaPlus className="text-white text-lg cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
