import { H2 } from "@/components/ui/typography.tsx";
import { ROUTES } from "@/config/routes.ts";
import MainLayout from "@/layouts/MainLayout";
import FormBuilderPage from "@/pages/FormBuilderPage";
import HomePage from "@/pages/HomePage";
import MyFormsPage from "@/pages/MyFormsPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.forms} element={<MyFormsPage />} />
          <Route path={ROUTES.formCreate} element={<FormBuilderPage />} />
          <Route path={"*"} element={<H2>Page not found</H2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
