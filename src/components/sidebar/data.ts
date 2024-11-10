import {
  PiBriefcaseFill,
  PiChatCircleSlash,
  PiCheers,
  PiCirclesThreePlus,
  PiConfetti,
  PiCouch,
  PiFlag,
  PiHouse,
  PiShoppingCart,
  PiQuestion,
  PiSlidersHorizontal,
} from "react-icons/pi";

export interface NavElement {
  title: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavElement[];
}

export const navElements: NavElement[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: PiHouse,
  },
  {
    title: "Discover Lagos",
    href: "/dashboard/discover-lagos",
    icon: PiCirclesThreePlus,
    children: [
      {
        title: "All Business",
        href: "/dashboard/discover-lagos/business",
      },
      {
        title: "Category",
        href: "/dashboard/discover-lagos/category",
      },
      {
        title: "Collection",
        href: "/dashboard/discover-lagos/collection",
      },
    ],
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: PiCheers,
  },
  {
    title: "Business Listing",
    href: "/dashboard/business",
    icon: PiBriefcaseFill,
    children: [
      {
        title: "Listings",
        href: "/dashboard/business/listing",
      },
      {
        title: "Business Category",
        href: "/dashboard/business/business-category",
      },
      {
        title: "Service Collections",
        href: "/dashboard/business/service-collections",
      },
      {
        title: "Service Category",
        href: "/dashboard/business/service-category",
      },
    ],
  },
  {
    title: "Reported Businesses",
    href: "/dashboard/reported-businesses",
    icon: PiFlag,
  },
  {
    title: "Hotels & Airbnb",
    href: "/dashboard/hotels",
    icon: PiCouch,
  },
  {
    title: "Night Life",
    href: "/dashboard/nightlife",
    icon: PiConfetti,
  },
  {
    title: "Malls & Shops",
    href: "/dashboard/malls",
    icon: PiShoppingCart,
  },
  {
    title: "Content Moderation",
    href: "/dashboard/moderation",
    icon: PiChatCircleSlash,
  },
];

export interface FootElement {
  title: string;
  href: string;
  icon?: React.ComponentType;
  children?: FootElement[];
}

export const footElements: FootElement[] = [
  {
    title: "Events",
    href: "/dashboard/events",
    icon: PiQuestion,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: PiSlidersHorizontal,
    children: [
      {
        title: "Admin Settings",
        href: "/dashboard/settings",
      },
      {
        title: "User Settings",
        href: "/dashboard/settings",
      },
    ],
  },
];
