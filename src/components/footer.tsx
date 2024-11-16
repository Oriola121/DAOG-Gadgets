import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#313131] flex items-center justify-center">
      <div className="w-[90%] mx-auto px-20 py-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-white font-bold hover:text-white/80">
              DAOG
            </Link>
            <Link href="/help" className="text-white/60 hover:text-white">
              Help
            </Link>
            <Link href="/device" className="text-white/60 hover:text-white">
              Device
            </Link>
            <Link href="/community" className="text-white/60 hover:text-white">
              Community
            </Link>
          </nav>
          <div className="text-white font-bold">© DAOG Gadgets</div>
        </div>
      </div>
    </div>
  );
}
