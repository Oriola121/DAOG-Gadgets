"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@daog/components/ui/tabs";
import { Separator } from "@daog/components/ui/separator";
import DiscoverLagos from "./discover-lagos";
import Overview from "./overview";

export default function NavsInDashboard() {
  return (
    <div className="py-2">
      <Tabs defaultValue="Overview">
        <TabsList className="flex justify-start w-full bg-transparent cursor-pointer border-b border-[#474747]">
          <div className="w-1/2 flex justify-around">
            <TabsTrigger
              value="Overview"
              className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-[#FFCB05] -mb-[10px] relative"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="Discover Lagos"
              className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-[#FFCB05] -mb-[10px] relative"
            >
              Discover Lagos
            </TabsTrigger>
            <TabsTrigger
              value="Business Listing"
              className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-[#FFCB05] -mb-[10px] relative"
            >
              Business Listing
            </TabsTrigger>
            <TabsTrigger
              value="Events"
              className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-[#FFCB05] -mb-[10px] relative"
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="Nightlife Analytics"
              className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-[#FFCB05] -mb-[10px] relative"
            >
              Nightlife Analytics
            </TabsTrigger>
          </div>
        </TabsList>

        {/* Tab content */}
        <TabsContent value="Overview">
          <Overview />
        </TabsContent>
        <TabsContent value="Discover Lagos">
          <DiscoverLagos />
        </TabsContent>
        <TabsContent value="Business Listing">
          {/*  Business Listing */}
        </TabsContent>
        <TabsContent value="Events">{/*  Events */}</TabsContent>
        <TabsContent value="Nightlife Analytics">
          {/* Nightlife Analytics */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
