import { PiHouse } from "react-icons/pi";

const headQuotes = [
  {
    quote: "Finding motivation",
  },
  {
    quote: "Career growth",
  },
  {
    quote: "Self-improvement",
  },
  {
    quote: "Productivity",
  },
  {
    quote: "Relationship improver",
  },
];
export default function HomeHeader() {
  return (
    <div className="border-b border-[#474747] px-6 py-2 space-y-2">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <PiHouse color="white" /> Home
        </a>
        <ul className="flex space-x-4 items-center">
          <li>Non-fiction</li>
          <li>Self-development</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold">Gadgets for self-development</h1>
      <div className="flex gap-4 items-center">
        {headQuotes.map((quotes, index) => (
          <div key={index} className="flex gap-2 items-center">
            <div className="bg-black rounded-full py-2 px-4 text-xs">
              {quotes.quote}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
