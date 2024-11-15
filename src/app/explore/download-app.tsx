"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function DownloadApp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 border-y border-white/20"
      >
        <h2 className="text-2xl font-bold">Download our app</h2>
        <FiChevronDown
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="flex items-center ">
          <div className="p-8 flex items-center justify-between w-3/4">
            <div className="w-[40%]">
              <h3 className="text-xl font-bold mb-4">Shop with ease!</h3>
              <p className="text-white/80 mb-6">
                Get the latest tech gadgets delivered to your doorstep with DAOG
                Gadgets App, and get up to 30% discount with special flash sale!
              </p>
              <button className="px-6 py-3 font-medium rounded-lg bg-[#474747]/70 text-white text-sm">
                Download
              </button>
            </div>
            <div className="w-1/4">
              <Image
                src="/uploads/smartwatch.png"
                width={200}
                height={200}
                alt="Smart Watch App"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
