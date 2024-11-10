"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { PiCaretDoubleLeft } from "react-icons/pi";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@daog/components/ui/sidebar";
import { useTheme } from "next-themes";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoLight from "../../app/assets/logo-light.svg";
import LogoDark from "../../app/assets/logo-dark.svg";
import { FaCaretDown } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function LogoDisplay() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex flex-col items-center">
        {!isCollapsed ? (
          <div className="h-24 p-2 bg-secondary text-secondary-foreground w-11/12 rounded-lg mx-3 my-1 cursor-pointer">
            <div className="h-2/4 bg-primary-foreground flex items-center justify-between rounded-lg px-2">
              {isMounted &&
                (resolvedTheme === "dark" ? (
                  <LogoDark className="w-16 h-8" />
                ) : (
                  <LogoLight className="w-16 h-8" />
                ))}
              <SidebarTrigger />
            </div>
            <div className="h-2/4 flex items-center justify-between px-2 mt-2">
              <div className="flex-1 flex items-center gap-2">
                <div className="rounded-full bg-primary-foreground w-10 h-9 flex items-center justify-center">
                  <Avatar className="h-full w-full rounded-full">
                    <AvatarImage src={user?.picture} />
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <h1 className="text-sm max-w-[14ch] overflow-hidden truncate">
                  {user?.name}
                </h1>
              </div>
              <FaCaretDown className="cursor-pointer" />
            </div>
          </div>
        ) : (
          <SidebarTrigger />
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
