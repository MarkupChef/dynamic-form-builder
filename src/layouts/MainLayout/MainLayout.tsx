import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
      <footer>2025</footer>
    </>
  );
};

export default MainLayout;
