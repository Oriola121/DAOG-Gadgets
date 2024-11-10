"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@daog/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@daog/components/ui/sidebar";
import { navElements } from "./data";
import { PiCaretDown } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@daog/lib/utils";
import { useState } from "react";

export function NavigationElements() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isChildActive = (children) => {
    return children?.some((child) => child.href === pathname);
  };

  const isActive = (item) => {
    if (item.children) {
      return isChildActive(item.children);
    }
    return item.href === pathname;
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navElements.map((item) => {
          // Local state to manage the open/close of each collapsible
          const [isOpen, setIsOpen] = useState(false);

          return (
            <SidebarMenuItem key={item.title}>
              {item.children ? (
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <CollapsibleTrigger asChild>
                    <div
                      className={cn(
                        "w-full mb-2",
                        !isCollapsed &&
                          isActive(item) &&
                          "border-l-[#FFCB05] border-l-4"
                      )}
                    >
                      <SidebarMenuButton
                        className={cn(
                          "gap-4 text-[#B3B3B3]",
                          !isCollapsed &&
                            isActive(item) &&
                            "py-2 px-3 h-full w-11/12 flex items-center rounded-full bg-[#000000] text-primary",
                          isCollapsed &&
                            "hover:bg-muted hover:text-[#FFCB05] hover:rounded-full"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon />}
                          {!isCollapsed && item.title}{" "}
                          {/* Show title only if not collapsed */}
                        </span>
                        <PiCaretDown
                          className={cn(
                            "transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </SidebarMenuButton>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <Link href={subItem.href} className="w-full">
                            <SidebarMenuSubButton
                              className={cn(
                                "w-full text-[#B3B3B3]",
                                subItem.href === pathname &&
                                  "bg-white/15 rounded-full text-primary"
                              )}
                            >
                              {subItem.title}
                            </SidebarMenuSubButton>
                          </Link>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={item.href} className="w-full">
                  <div
                    className={cn(
                      "w-full",
                      !isCollapsed &&
                        isActive(item) &&
                        "border-l-[#FFCB05] border-l-4"
                    )}
                  >
                    <SidebarMenuButton
                      className={cn(
                        "w-full text-[#B3B3B3]",
                        !isCollapsed &&
                          isActive(item) &&
                          "py-2 px-3 h-full w-11/12 flex items-center gap-4 rounded-full bg-[#000000] text-primary",
                        isCollapsed &&
                          "hover:bg-muted hover:text-[#FFCB05] hover:rounded-full"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon && <item.icon />}
                        {!isCollapsed && item.title}{" "}
                        {/* Show title only if not collapsed */}
                      </span>
                    </SidebarMenuButton>
                  </div>
                </Link>
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
