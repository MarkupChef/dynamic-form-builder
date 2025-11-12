import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import FormListPage from "@/pages/FormListPage";
import { ROUTES } from "@/utils/constants/routes.ts";
import Navigation from "@/layouts/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <hr className={"my-4"} />
        <Routes>
          <Route path={ROUTES.root} element={<h1>Home page</h1>} />
          <Route path={ROUTES.forms} element={<FormListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
