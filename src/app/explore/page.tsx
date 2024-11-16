"use client";
import React from "react";
import Image from "next/image";
import { ScrollArea } from "@daog/components/ui/scroll-area";
import { Search } from "lucide-react";
import HowToShop from "./how-to-shop";
import JoinCommunity from "./join-community";
import DownloadApp from "./download-app";
import Footer from "@daog/components/footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }

  return (
    <ScrollArea className="h-screen bg-black">
      <div className="py-12 px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            EXPLORE
            <br />
            TECH
          </h1>
          <div className="flex gap-4">
            <a
              href="/api/auth/login"
              className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#474747]"
            >
              Sign in
            </a>
            <a
              href="/api/auth/signup"
              className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#474747]"
            >
              Sign up
            </a>
          </div>
        </div>

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

        <HowToShop />
        <JoinCommunity />
        <DownloadApp />
      </div>
      <Footer />
    </ScrollArea>
  );
}
