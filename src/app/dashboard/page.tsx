"use client";

import { AppSidebar } from "@daog/components/sidebar/app-sidebar";
import { ThemeToggle } from "@daog/components/theme-toggle";
import { Separator } from "@daog/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@daog/components/ui/sidebar";
import NextTopLoader from "nextjs-toploader";
import { FaCaretDown, FaRegBell, FaSearch } from "react-icons/fa";
import { PiMagnifyingGlass, PiQuestion } from "react-icons/pi";

import { Input } from "@daog/components/ui/input";
import NavsInDashboard from "@daog/components/dashboard/navs-in-dashboard";
import UserName from "@daog/components/dashboard/user-name";
import TodayDate from "@daog/components/dashboard/today's-date";
import Upload from "@daog/components/dashboard/upload";

export default function Page() {
  return (
    <div className=" px-4">
      <div className="py-2 flex items-center justify-between">
        <div className="">
          <p className="text-xs mb-1 text-gray-500">Main Dashboard</p>
          <h1 className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <i>Y</i> &apos;ello
            </span>
            <UserName />
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <Upload />
          <Separator orientation="vertical" className="h-10 bg-[#474747]" />
          <TodayDate />
        </div>
      </div>
      <NavsInDashboard />
    </div>
  );
}
