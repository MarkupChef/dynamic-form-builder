import { ROUTES } from "@/config/routes.ts";
import { Home, LayoutPanelTop } from "lucide-react";

const mainNavigation = [
  {
    title: "Home",
    url: ROUTES.root,
    icon: Home,
  },
  {
    title: "My Forms",
    url: ROUTES.forms,
    icon: LayoutPanelTop,
  },
];

export default mainNavigation;
