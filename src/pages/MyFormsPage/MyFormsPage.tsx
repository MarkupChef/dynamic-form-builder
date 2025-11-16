import { Button } from "@/components/ui/button.tsx";
import { ROUTES } from "@/config/routes.ts";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import { removeForm } from "@/redux-store/slices/forms.slice.ts";
import { NavLink } from "react-router";

const MyFormsPage = () => {
  const builtFormList = useAppSelector((state) => state.forms.forms);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeForm({ id }));
  };

  return (
    <div>
      <h1>My Forms</h1>

      {builtFormList.map((item) => (
        <div key={item.id}>
          <p key={item.id}>{item.name}</p>
          <Button type={"button"} onClick={() => handleRemove(item.id)}>
            Remove
          </Button>
        </div>
      ))}

      <NavLink to={ROUTES.formCreate}>
        <Button>Create new form</Button>
      </NavLink>
    </div>
  );
};

export default MyFormsPage;
