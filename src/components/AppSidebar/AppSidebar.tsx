import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Large, Small } from "@/components/ui/typography.tsx";
import mainNavigation from "@/config/mainNavigation.ts";
import { matchPath, NavLink, useLocation } from "react-router";

function AppSidebar() {
  const location = useLocation();

  const renderNav = () => {
    return mainNavigation.map((item) => {
      const isActive =
        matchPath({ path: item.url, end: true }, location.pathname) !== null;

      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={isActive}>
            <NavLink to={item.url}>
              <item.icon />
              {item.title}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Large>Form Builder</Large>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderNav()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Small>Copyright 2025</Small>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
