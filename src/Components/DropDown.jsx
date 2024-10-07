import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";

export default function DropDown({setTab}) {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const SelectedTab = (e) =>{

    setTab(e)
    setDropDown(!dropDown)
  }

  return (
    <div className="relative w-[9rem] lg:w-[12rem]">
      <button
        className=" flex justify-between bg-gradient-to-r from-[#0d4fa9] to-[#52a9f6] text-sm rounded-lg px-5 py-2 font-medium text-white w-full items-center"
        onClick={toggleDropDown}
      >
        Select
        {dropDown === false ? <FaSortDown /> : <FaSortUp />}
      </button>

      <ul
        className={`absolute bg-blue-500 w-full top-12 left-0 font-medium text-sm text-white cursor-pointer rounded-md text-start transition-all duration-500 overflow-hidden ${
          dropDown ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}   
      >
        <li className="hover:bg-blue-600 px-5 py-3">Upcomming</li>
        <li className="hover:bg-blue-600 px-5 py-3" onClick={() => {SelectedTab(1)}}>Scheduled</li>
        <li className="hover:bg-blue-600 px-5 py-3" onClick={() => {SelectedTab(2)}}>Completed</li>
        <li className="hover:bg-blue-600 px-5 py-3" onClick={() => {SelectedTab(3)}}>Cancelled</li>
        <li className="hover:bg-blue-600 px-5 py-3">Requests</li>
      </ul>
    </div>
  );
}
