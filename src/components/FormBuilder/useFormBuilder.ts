import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  addInputTextField,
  type InputTypes,
} from "@/redux-store/slices/formBuilder.slice.ts";

const useFormBuilder = () => {
  const dispatch = useAppDispatch();
  const { fields } = useAppSelector((state) => state.formBuilder);
  const handleSelectField = (typeField: InputTypes) => {
    dispatch(addInputTextField(typeField));
  };

  return {
    handleSelectField,
    fields,
  };
};

export default useFormBuilder;
