import Footer from "@daog/components/footer";
import { Input } from "@daog/components/ui/input";
import { MdOutlineRecommend } from "react-icons/md";
import { CgSmartphoneShake } from "react-icons/cg";
import { Search } from "lucide-react";
import {
  PiCaretDown,
  PiHeadphones,
  PiHouse,
  PiLaptop,
  PiPlusBold,
  PiTag,
} from "react-icons/pi";
import HomeHeader from "./home-header";
import { ScrollArea } from "@daog/components/ui/scroll-area";
import Filter from "./filter";
import ProductView from "./product-view";
import { prisma } from "../../lib/prisma";

const navItems = [
  { icon: PiHouse, label: "Home", hasDropdown: false },
  { icon: PiPlusBold, label: "New", hasDropdown: false },
  { icon: MdOutlineRecommend, label: "Recommended", hasDropdown: false },
  { icon: PiLaptop, label: "Laptop", hasDropdown: true },
  { icon: PiHeadphones, label: "Headphone", hasDropdown: true },
  { icon: CgSmartphoneShake, label: "Smart", hasDropdown: true },
  { icon: PiTag, label: "Sale", hasDropdown: false },
];
async function getProducts() {
  return await prisma.product.findMany();
}

export default async function Page() {
  const products = await getProducts();
  return (
    <div className="h-screen bg-zinc-900">
      <div className="h-1/5 bg-[#313131] backdrop-blur-xl">
        <div className="h-3/5 flex items-center justify-between p-6 border-b border-[#474747]">
          <h1 className="text-2xl font-bold">DAOG Gadgets</h1>
          <div className="w-2/5 flex items-center gap-3">
            <Input
              className="bg-[#131313] border-none rounded-lg"
              name="search"
              type="search"
              placeholder="Search for gadgets"
            />
            <div className="bg-black p-3 rounded-lg">
              <Search size={10} />
            </div>
          </div>
          <button className="bg-black px-6 py-3 rounded-lg text-sm font-medium">
            Buy Now
          </button>
        </div>
        <div className="flex h-1/4 items-center p-6">
          <ul className="w-full py-6 flex items-center justify-between text-[#b3b3b3]">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon color="white" />
                {item.label}
                {item.hasDropdown && <PiCaretDown color="white" />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScrollArea className="h-4/5">
        <HomeHeader />
        <div className="flex h-full">
          <div className="w-1/5 border-r border-[#474747]">
            <Filter />
          </div>
          <div className="w-4/5">
            <ProductView />
          </div>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
}
