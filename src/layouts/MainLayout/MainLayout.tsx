import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Outlet } from "react-router";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarTrigger />
        <main className={styles.root}>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
