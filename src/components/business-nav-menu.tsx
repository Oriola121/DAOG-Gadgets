"use client";

import * as React from "react";
import { cn } from "@daog/lib/utils";

export default function BusinessNavMenu() {
  const components = [
    { title: "All Listings", href: "/dashboard/business-listing/all-listings" },
    {
      title: "Business Category",
      href: "/dashboard/business-listing/categories",
    },
    { title: "Analytics", href: "/dashboard/business-listing/analytics" },
    { title: "Reports", href: "/dashboard/business-listing/reports" },
  ];

  return (
    <div className="w-full mt-4">
      <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
        {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
          />
        ))}
      </ul>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
