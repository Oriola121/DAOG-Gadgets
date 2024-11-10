"use client";

import * as React from "react";

import { NavigationElements } from "@daog/components/sidebar/nav-elements";
import { FooterElements } from "@daog/components/sidebar/nav-footer";
import { SignOut } from "@daog/components/sidebar/sign-out";
import { LogoDisplay } from "@daog/components/sidebar/logo-display";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@daog/components/ui/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoDisplay />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[70%] flex flex-col py-1">
          <NavigationElements />
        </ScrollArea>
        <Separator className="w-11/12 m-2" />
        <ScrollArea className="h-[25%] flex flex-col py-1">
          <FooterElements />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <SignOut />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
