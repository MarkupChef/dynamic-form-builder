import { useAppDispatch } from "@/redux-store/hooks.ts";
import { saveInputTextSettings } from "@/redux-store/slices/formBuilder.slice.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const InputTextSettingsSchema = z.object({
  label: z.string(),
  id: z.string(),
});

const useInputTextSettings = () => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof InputTextSettingsSchema>>({
    resolver: zodResolver(InputTextSettingsSchema),
  });

  const handleCloseSettings = (flag: boolean) => {
    if (!flag && form.formState.isDirty) {
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
