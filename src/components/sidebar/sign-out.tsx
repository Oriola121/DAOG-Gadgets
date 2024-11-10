"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@daog/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@daog/components/ui/sidebar";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { PiSignOut } from "react-icons/pi";

export function SignOut() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { user } = useUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {!isCollapsed ? (
          <div className="w-[95%] bg-secondary rounded-lg flex items-center p-2 gap-2 mx-2 mb-1 cursor-pointer">
            <div className="rounded-full bg-primary-foreground w-10">
              <Avatar className="h-full w-full rounded-full">
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-[135px]">
              <h1 className="text-sm max-w-[13ch] overflow-hidden truncate">
                {user?.name}
              </h1>
              <p className="text-xs max-w-[17ch] overflow-hidden truncate">
                {user?.email}
              </p>
            </div>
            <Link href={"/api/auth/logout"} className=" hover:text-[#FFCB05]">
              <PiSignOut size={20} />
            </Link>
          </div>
        ) : (
          <div className="w-full hover:bg-muted hover:text-[#FFCB05] hover:rounded-full p-2 flex items-center justify-center">
            <Link href={"/api/auth/logout"}>
              <PiSignOut />
            </Link>
          </div>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
