import { PiArrowLeft } from "react-icons/pi";

export default function Cart({
  onClose,
}: {
  onClose: (value: boolean) => void;
}) {
  const handleClose = () => {
    onClose(false);
  };
  return (
    <div className="h-full w-full">
      <div className="py-12 px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white ">
            DAOG
            <br />
            <span className="text-xl">Gadgets</span>
          </h1>
          <button
            onClick={handleClose}
            className="flex gap-2 items-center px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#474747] cursor-pointer hover:bg-[#313131]"
          >
            <PiArrowLeft color="white" />
            Return
          </button>
        </div>
      </div>
    </div>
  );
}
