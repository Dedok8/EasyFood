import { Menu, History, MapPin, Gift, HelpCircle } from "lucide-react";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import type { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  path?: string;
  highlighted?: boolean;
  subItems?: SubMenuItem[];
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export const menuItems: MenuSection[] = [
  {
    section: "MENU",
    items: [
      {
        icon: Menu,
        label: "Food Menu",
        highlighted: true,
        subItems: [
          {
            label: "Smart Assistant",
            path: FRONT_ROUTES.pages.SmartAssistant.path,
          },
          {
            label: "Full Menu",
            path: FRONT_ROUTES.pages.FullMenu.path,
          },
        ],
      },
      {
        icon: History,
        label: "Order History",
        path: FRONT_ROUTES.pages.OrderHistory.path,
      },
      {
        icon: MapPin,
        label: "Locations",
        path: FRONT_ROUTES.pages.SetLocation.path,
      },
    ],
  },
  {
    section: "GENERAL",
    items: [
      {
        icon: Gift,
        label: "My Rewards",
        path: FRONT_ROUTES.pages.MyRewards.path,
      },
      {
        icon: HelpCircle,
        label: "Help",
        path: FRONT_ROUTES.pages.HelpPage.path,
      },
    ],
  },
];
