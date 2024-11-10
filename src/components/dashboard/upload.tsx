import { PiExport } from "react-icons/pi";

export default function Upload() {
  return (
    <div className="flex items-center gap-4 rounded-full px-5 py-3 border border-[#474747]">
      <PiExport />
      <p className="text-xs">Export CSV</p>
    </div>
  );
}
