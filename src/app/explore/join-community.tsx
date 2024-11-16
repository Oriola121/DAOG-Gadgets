import Image from "next/image";
import { useState } from "react";
import { PiCaretDown } from "react-icons/pi";

const communityOptions = [
  {
    title: "As a tech",
    description:
      "Earn rewards by shopping the latest tech products. All you need is a passion for gadgets.",
    buttonText: "Shop now",
    icon: "/uploads/tech-person.png",
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
    icon: "/uploads/laptop-3.png",
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
        <div className="flex items-center justify-center py-12 ">
          <div className=" w-3/4 space-y-10">
            {communityOptions.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="w-[30%]">
                  <Image
                    src={option.icon}
                    width={150}
                    height={150}
                    alt={option.title}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[30%]">
                  <h3 className="text-2xl font-bold text-white">
                    {option.title}
                  </h3>
                  <p className="text-white/80">{option.description}</p>
                  <div className="flex gap-4">
                    <button className="w-[80%] py-3 rounded-lg bg-[#474747]/70 text-white text-sm">
                      {option.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
