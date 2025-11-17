import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  addInputField,
  resetFields,
} from "@/redux-store/slices/formBuilder.slice.ts";
import type { FormBuilderFieldTypes } from "@/types/FormBuilderInputTypes.type.ts";
import { useForm } from "react-hook-form";

const useFormBuilderFields = () => {
  const dispatch = useAppDispatch();
  const formFields = useForm();
  const formBuilder = useAppSelector((state) => state.formBuilder);
  const { fields } = formBuilder;

  const reset = () => {
    dispatch(resetFields());
  };

  const handleSelectField = (typeField: FormBuilderFieldTypes) => {
    dispatch(addInputField(typeField));
  };

  return {
    formFields,
    fields,
    handleSelectField,
    reset,
  };
};

export default useFormBuilderFields;
