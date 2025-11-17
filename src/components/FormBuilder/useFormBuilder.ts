import { ROUTES } from "@/config/routes.ts";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  resetFormBuilderSlice,
  toggleIsLabels,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { saveForm } from "@/redux-store/slices/forms.slice.ts";
import FormBuilderSchema from "@/schemas/FormBuilder.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const useFormBuilder = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formBuilder = useAppSelector((state) => state.formBuilder);

  const form = useForm<z.infer<typeof FormBuilderSchema>>({
    resolver: zodResolver(FormBuilderSchema),
    defaultValues: {
      name: formBuilder.name,
      isShowLabels: formBuilder.isShowLabels,
    },
  });

  const handleShowLabels = () => {
    dispatch(toggleIsLabels());
  };

  function onSubmit(formData: z.infer<typeof FormBuilderSchema>) {
    dispatch(
      saveForm({
        formData,
        fields: formBuilder.fields,
      }),
    );
    dispatch(resetFormBuilderSlice());
    navigate(ROUTES.forms);
  }

  return {
    form,
    handleShowLabels,
    onSubmit,
  };
};

export default useFormBuilder;
