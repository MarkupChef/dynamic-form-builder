import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import { removeForm } from "@/redux-store/slices/forms.slice.ts";

const useFormList = () => {
  const builtFormList = useAppSelector((state) => state.forms.forms);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeForm({ id }));
  };

  return {
    builtFormList,
    handleRemove,
  };
};

export default useFormList;
