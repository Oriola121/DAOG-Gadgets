"use client";

import Image from "next/image";
import { useState } from "react";
import { PiCaretDown } from "react-icons/pi";

const communityOptions = [
  {
    title: "As a tech",
    description:
      "Earn rewards by shopping the latest tech products. All you need is a passion for gadgets.",
    buttonText: "Shop now",
    icon: "/uploads/tech-person.jpg",
  },
  {
    title: "As a business",
    description:
      "DAOG Gadgets supports businesses with online sales, loyalty programs, and more.",
    buttonText: "Partner with us",
    icon: "/uploads/business-phone.png",
  },
  {
    title: "Join our team",
    description:
      "Be part of a team that's revolutionizing the tech e-commerce experience.",
    buttonText: "Join us",
    icon: "/uploads/laptop.png",
  },
];

export default function JoinCommunity() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 border-y border-white/20"
      >
        <h2 className="text-2xl font-bold text-white">
          Join DAOG Gadgets Community
        </h2>
        <PiCaretDown
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="grid grid-cols-[repeat(2,1fr)] gap-x-32 py-12">
          <div className="space-y-8">
            {communityOptions.map((option, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={option.icon}
                  width={200}
                  height={200}
                  alt={option.title}
                  className="object-contain rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="space-y-16">
            {communityOptions.map((option, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {option.title}
                </h3>
                <p className="text-white/80">{option.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 rounded-lg bg-white/10 text-white text-sm">
                    {option.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
