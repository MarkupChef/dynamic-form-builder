import { ROUTES } from "@/config/routes.ts";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  resetFormBuilderSlice,
  toggleIsLabels,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { saveForm } from "@/redux-store/slices/forms.slice.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

export const FormBuilderSchema = z.object({
  name: z.string().min(2, {
    message: "Form Name must be at least 2 characters.",
  }),
  isShowLabels: z.boolean(),
});

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
    navigate(ROUTES.forms);
  }

  useEffect(() => {
    return () => {
      dispatch(resetFormBuilderSlice());
    };
  }, [dispatch]);

  return {
    form,
    handleShowLabels,
    onSubmit,
  };
};

export default useFormBuilder;
