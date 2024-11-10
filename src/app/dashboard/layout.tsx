"use client";
import { ThemeToggle } from "@daog/components";
import { PropsWithChildren } from "react";
import { FaCaretDown, FaRegBell, FaSearch } from "react-icons/fa";
import { Input } from "@daog/components/ui/input";
import { PiQuestion, PiMagnifyingGlass } from "react-icons/pi";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Separator } from "@daog/components/ui/separator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@daog/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";
import { AppSidebar } from "@daog/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@daog/components/ui/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@daog/components/ui/avatar";

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function Layout({ children }: PropsWithChildren) {
  const { user } = useUser();

  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <NextTopLoader color="#FFCB05" />
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14">
            <div className="flex items-center gap-2 px-4 w-full">
              <div className="w-full flex justify-between items-center py-2 px-4">
                <div className="relative w-52">
                  <Input
                    name="search"
                    type="text"
                    placeholder="Search for anything"
                    className="p-2 pl-10 border-none rounded-lg w-52 bg-secondary"
                  ></Input>
                  <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="flex items-center gap-x-4">
                  <PiMagnifyingGlass />
                  <PiQuestion />
                  <FaRegBell />
                  <div className="rounded-full ml-8 mr-4  w-40 bg-secondary px-2 py-1 flex items-center justify-between cursor-pointer">
                    <div className="flex-1 flex items-center gap-2">
                      <div className="rounded-full bg-primary-foreground w-10 h-10">
                        <Avatar className="h-full w-full rounded-full">
                          <AvatarImage src={user?.picture} />
                          <AvatarFallback>{user?.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                      <h1 className="text-sm max-w-[8ch] overflow-hidden truncate">
                        {user?.name || "Admin"}
                      </h1>
                    </div>
                    <FaCaretDown />
                  </div>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </header>
          <div className="bg-primary-foreground h-full">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
