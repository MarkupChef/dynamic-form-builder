import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  addInputTextField,
  type InputTypes,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { useForm } from "react-hook-form";

const useFormBuilderFields = () => {
  const dispatch = useAppDispatch();
  const formFields = useForm();
  const formBuilder = useAppSelector((state) => state.formBuilder);
  const { fields } = formBuilder;

  const handleSelectField = (typeField: InputTypes) => {
    dispatch(addInputTextField(typeField));
  };

  return {
    formFields,
    fields,
    handleSelectField,
  };
};

export default useFormBuilderFields;
