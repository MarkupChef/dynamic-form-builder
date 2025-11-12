import Navigation from "@/layouts/Navigation";
import FormBuilderPage from "@/pages/FormBuilderPage";
import FormListPage from "@/pages/FormListPage";
import { ROUTES } from "@/utils/constants/routes.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <hr className={"my-4"} />
        <Routes>
          <Route path={ROUTES.root} element={<h1>Home page</h1>} />
          <Route path={ROUTES.forms} element={<FormListPage />} />
          <Route path={ROUTES.formCreate} element={<FormBuilderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
