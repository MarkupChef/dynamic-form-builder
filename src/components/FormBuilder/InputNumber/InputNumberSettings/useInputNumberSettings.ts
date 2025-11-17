import { useAppDispatch } from "@/redux-store/hooks.ts";
import { saveInputSettings } from "@/redux-store/slices/formBuilder.slice.ts";
import InputNumberSettingsSchema from "@/schemas/InputNumberSettings.schema.ts";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import type { InputNumberProps } from "@/types/InputNumberProps.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useInputNumberSettings = (field: FormBuilderInput) => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof InputNumberSettingsSchema>>({
    resolver: zodResolver(InputNumberSettingsSchema),
    defaultValues: {
      label: field.label,
      ...(field.props as InputNumberProps),
    },
  });

  const handleCloseSettings = (flag: boolean) => {
    const isDirty = form.formState.isDirty;
    if (!flag && isDirty) {
      const formValues = form.getValues();
      form.reset(formValues);
      dispatch(saveInputSettings(formValues));
    }
  };

  return {
    form,
    handleCloseSettings,
  };
};

export default useInputNumberSettings;
