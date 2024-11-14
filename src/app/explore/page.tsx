import React from "react";
import Image from "next/image";
import { ScrollArea } from "@daog/components/ui/scroll-area";
import { Search } from "lucide-react";
import HowToShop from "./how-to-shop";

export default function Page() {
  return (
    <ScrollArea className="h-screen">
      <div className="py-12 px-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            EXPLORE
            <br />
            TECH
          </h1>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#474747]">
              Sign in
            </div>
            <div className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#474747]">
              Sign up
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex items-center py-10 gap-10">
          <div className="w-1/3">
            <Image
              src="/uploads/iwatch.png"
              width={400}
              height={100}
              alt="Smart Watch"
              // style={{ width: "100%", height: "aspect-ratio" }}
              className="w-full"
            />
          </div>
          <div className="flex items-end gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <h1 className="text-6xl font-bold text-white">
                Discover the latest
                <br />
                tech gadgets and
              </h1>
              <div className="flex gap-4 items-center mt-8">
                <div className="relative flex flex-1 items-center">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full px-6 py-2 rounded-lg border text-white outline-none"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="px-8 py-2 rounded-lg bg-[#474747] text-white font-medium">
                  Search
                </div>
              </div>
            </div>
            <Image
              src="/uploads/earpods.webp"
              width={120}
              height={120}
              alt="earpod"
            />
          </div>
        </div>

        {/* How to shop section */}
        <HowToShop />
        {/* Community Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-10">
            Join DAOG Gadgets Community
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#474747] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">As a tech</h3>
              <p className="text-white/80 mb-6">
                Build money by sharing your tech gadgets that you do not need. A
                passion for gadgets.
              </p>
              <div className="px-6 py-3 rounded-lg bg-white text-black font-medium">
                Discover more
              </div>
            </div>
            <div className="bg-[#474747] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                As a business
              </h3>
              <p className="text-white/80 mb-6">
                DAOG Gadgets supports businesses that showcase their tech,
                highly profitable store more.
              </p>
              <div className="px-6 py-3 rounded-lg bg-white text-black font-medium">
                Partner with us
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-10">
            Download our app
          </h2>
          <div className="bg-[#474747] p-8 rounded-lg flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                Shop with ease!
              </h3>
              <p className="text-white/80 mb-6">
                Get the latest tech gadgets delivered to your doorstep with DAOG
                Gadgets App, and get up to 30% discount with special flash sale!
              </p>
              <div className="px-6 py-3 rounded-lg bg-white text-black font-medium">
                Download
              </div>
            </div>
            <div className="w-1/4">
              <Image
                src="/uploads/smartwatch.png"
                width={200}
                height={200}
                alt="Smart Watch App"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
