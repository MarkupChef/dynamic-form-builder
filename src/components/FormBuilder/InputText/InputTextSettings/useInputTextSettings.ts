import { useAppDispatch } from "@/redux-store/hooks.ts";
import {
  type FormBuilderInputTextField,
  saveInputTextSettings,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const InputTextSettingsSchema = z.object({
  label: z.string(),
  id: z.string(),
  required: z.boolean(),
  placeholder: z.string(),
  minLength: z.number(),
  maxLength: z.number(),
  type: z.string(),
});

const useInputTextSettings = (field: FormBuilderInputTextField) => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof InputTextSettingsSchema>>({
    resolver: zodResolver(InputTextSettingsSchema),
    defaultValues: {
      label: field.label,
      ...field.props,
      /*required: field.required,
      id: field.id,
      placeholder: field.placeholder,
      type: field.typeValue,
      minLength: field.minLength,
      maxLength: field.maxLength,*/
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

export default useInputTextSettings;
