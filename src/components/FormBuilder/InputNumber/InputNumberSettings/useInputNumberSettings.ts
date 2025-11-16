import { useAppDispatch } from "@/redux-store/hooks.ts";
import { saveInputTextSettings } from "@/redux-store/slices/formBuilder.slice.ts";
import InputTextSettingsSchema from "@/schemas/InputTextSettings.schema";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useInputNumberSettings = (field: FormBuilderInput) => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof InputTextSettingsSchema>>({
    resolver: zodResolver(InputTextSettingsSchema),
    defaultValues: {
      label: field.label,
      ...field.props,
    },
  });

  const handleCloseSettings = (flag: boolean) => {
    const isDirty = form.formState.isDirty;
    if (!flag && isDirty) {
      const formValues = form.getValues();
      form.reset(formValues);
      dispatch(saveInputTextSettings(formValues));
    }
  };

  return {
    form,
    handleCloseSettings,
  };
};

export default useInputNumberSettings;
