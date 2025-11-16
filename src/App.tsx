import { ROUTES } from "@/config/routes.ts";
import MainLayout from "@/layouts/MainLayout";
import FormBuilderPage from "@/pages/FormBuilderPage";
import MyFormsPage from "@/pages/MyFormsPage";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.root} element={<MainLayout />}>
            <Route index element={<h1>Home page</h1>} />
            <Route path={ROUTES.forms} element={<MyFormsPage />} />
            <Route path={ROUTES.formCreate} element={<FormBuilderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
