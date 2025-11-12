import { NavLink } from "react-router";
import { ROUTES } from "@/utils/constants/routes.ts";
import { Button } from "@/components/ui/button.tsx";

const FormListPage = () => {
  return (
    <div>
      <h1>Form List page</h1>
      <NavLink to={ROUTES.formCreate}>
        <Button>Create new form</Button>
      </NavLink>
    </div>
  );
};

export default FormListPage;
