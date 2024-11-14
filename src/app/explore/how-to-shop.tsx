import Image from "next/image";
const steps = [
  {
    step: 1,
    title: "Browse your favorite newly listed tech gadget.",
    icon: "/uploads/laptop-1.png",
  },
  {
    step: 2,
    title: "Spend your shopping updates regarding your item collection.",
    icon: "/uploads/headphones.png",
  },
  {
    step: 3,
    title: "Complete your purchase through your choice of payment.",
    icon: "/uploads/laptop-2.png",
  },
];
export default function HowToShop() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">
        How to shop at DAOG Gadgets
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {steps.map((item) => (
          <div
            key={item.step}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={item.icon}
              width={200}
              height={150}
              alt={`Step ${item.step}`}
              className="mb-6"
            />
            <div className="text-sm text-white/80">Step {item.step}</div>
            <p className="text-white mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
