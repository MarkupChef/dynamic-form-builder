import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
          <SidebarGroupLabel>Form Builder</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderNav()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
