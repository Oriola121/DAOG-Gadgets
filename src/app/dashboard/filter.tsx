"use client";

import { Checkbox } from "@daog/components/ui/checkbox";
import { Separator } from "@daog/components/ui/separator";
import { useState } from "react";
import { PiArrowUp, PiCaretDown } from "react-icons/pi";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="px-6 py-2">
        <div
          className="flex items-center justify-between text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Gadget Type
          <PiCaretDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <ul className="flex flex-col text-xs space-y-1 p-2 text-gray-200">
            <li className="flex items-center gap-2">
              <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
              Gadget
            </li>
            <li className="flex items-center gap-2">
              <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
              Accessories
            </li>
            <li className="flex items-center gap-2">
              <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
              Bluetooth
            </li>
          </ul>
        )}
      </div>

      <Separator className="w-full" />

      <div className="px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          Show Only
          <PiArrowUp />
        </div>
        <ul className="flex flex-col text-xs space-y-1 p-2 text-gray-200">
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Laptops
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Sale
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Pre-Sale
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            In-Stock
          </li>
        </ul>
      </div>

      <Separator className="w-full" />

      <div className="px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          Accessories
          <PiArrowUp />
        </div>
        <ul className="flex flex-col text-xs space-y-1 p-2 text-gray-200">
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Phone
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Laptop Bags
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Smart Watches
          </li>
        </ul>
      </div>

      <Separator className="w-full" />

      <div className="px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          Brand
          <PiArrowUp />
        </div>
        <ul className="flex flex-col text-xs space-y-1 p-2 text-gray-200">
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Apple
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Samsung Galaxy
          </li>
          <li className="flex items-center gap-2">
            <Checkbox className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:text-gray-300 shadow-sm shadow-white/30" />
            Xiaomi
          </li>
        </ul>
      </div>
    </div>
  );
}
