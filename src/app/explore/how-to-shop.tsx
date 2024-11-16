import Image from "next/image";
import { useState } from "react";
import { PiCaretDown } from "react-icons/pi";

const steps = [
  {
    step: 1,
    title:
      "Enter your search query. Find the perfect gadget or accessory easily.",
    icon: "/uploads/laptop-1.png",
  },
  {
    step: 2,
    title:
      "Select your desired product. You're one step closer to upgrading your tech collection.",
    icon: "/uploads/earphones.png",
  },
  {
    step: 3,
    title:
      "Complete your purchase. Sit back and relax as we prepare your order!",
    icon: "/uploads/laptop-12.png",
  },
];

export default function HowToShop() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 border-y border-white/20"
      >
        <h2 className="text-2xl font-bold text-white">
          How to shop at DAOG Gadgets
        </h2>
        <PiCaretDown
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="grid grid-cols-3 divide-x divide-white/20 border flex-wrap">
          {steps.map((item, index) => (
            <div key={item.step} className="flex flex-col  px-8 py-12">
              <div className="h-3/4 w-full flex items-center justify-center mb-6">
                <Image
                  src={item.icon}
                  width={200}
                  height={150}
                  alt={`Step ${item.step}`}
                />
              </div>
              <div className="w-full h-[25%]">
                <div className="text-sm text-white/80">Step {item.step}</div>
                <p className="text-white mt-2 text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
