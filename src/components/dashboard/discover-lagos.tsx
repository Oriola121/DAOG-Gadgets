import { Separator } from "@daog/components/ui/separator";
import {
  PiConfettiLight,
  PiForkKnifeLight,
  PiChampagneLight,
  PiCity,
  PiStorefront,
} from "react-icons/pi";

export default function DiscoverLagos() {
  return (
    <div className="h-32 bg-secondary flex rounded-md">
      <div className="h-full w-1/4 p-8">
        <PiConfettiLight className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Things to do</p>
        <h1 className="text-xl font-bold">42</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiChampagneLight className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Nightlife</p>
        <h1 className="text-xl font-bold">120</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiStorefront className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Shopping mall</p>
        <h1 className="text-xl font-bold">50</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiCity className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Hotels&Airbnb</p>
        <h1 className="text-xl font-bold">30</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiForkKnifeLight className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Restorants</p>
        <h1 className="text-xl font-bold">6</h1>
      </div>
    </div>
  );
}
