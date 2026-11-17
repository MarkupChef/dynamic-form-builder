import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
}from "@/components/ui/sidebar";

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
      <SidebarHeader className="px-6 py-5">
        <Large>Dynamic Form Builder</Large>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        <SidebarGroup className="px-4 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">{renderNav()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-6 py-5">
        <Small>Copyright {new Date().getFullYear()}</Small>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
