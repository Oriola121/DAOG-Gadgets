import { Separator } from "@daog/components/ui/separator";
import { PiSketchLogo, PiUsers, PiUserSound, PiWallet } from "react-icons/pi";

export default function Overview() {
  return (
    <div className="h-32 bg-secondary flex rounded-md">
      <div className="h-full w-1/4 p-8">
        <PiUsers className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Total Users</p>
        <h1 className="text-xl font-bold">92</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiUserSound className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Active Users</p>
        <h1 className="text-xl font-bold">10</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiSketchLogo className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Premium Subscribers</p>
        <h1 className="text-xl font-bold">5</h1>
      </div>
      <Separator orientation="vertical" className="h-4/5 my-4 bg-gray-500" />
      <div className="h-full w-1/4 p-8">
        <PiWallet className="mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 mb-2">Total Revenue</p>
        <h1 className="text-xl font-bold">2M 23k</h1>
      </div>
    </div>
  );
}
