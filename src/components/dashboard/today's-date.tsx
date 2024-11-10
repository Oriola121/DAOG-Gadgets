"use client";
import React, { useState } from "react";
import { PiCalendarBlank, PiCaretDown } from "react-icons/pi";

export default function TodayDate() {
  const [currentDate, setCurrentDate] = useState("");
  const [displayDate, setDisplayDate] = useState(false);

  const handleClick = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
    setDisplayDate(!displayDate);
  };

  return (
    <div
      className="relative flex items-center gap-4 rounded-full px-5 py-3 border border-[#474747] cursor-pointer"
      onClick={handleClick}
    >
      <PiCalendarBlank />
      <p className="text-xs">Today</p>
      <PiCaretDown className={`${displayDate ? "rotate-180" : ""}`} />

      {displayDate && currentDate && (
        <div className="absolute right-0 mt-24  text-[#FFCB05] text-xs z-10">
          {currentDate}
        </div>
      )}
    </div>
  );
}
