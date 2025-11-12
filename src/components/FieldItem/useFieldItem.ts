import { useAppDispatch } from "@/redux-store/hooks.ts";
import { removeField } from "@/redux-store/slices/formBuilder.slice.ts";

const useFieldItem = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(removeField({ id }));
  };

  return {
    remove,
  };
};

export default useFieldItem;
