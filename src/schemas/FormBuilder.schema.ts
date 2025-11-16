import { z } from "zod";

export const FormBuilderSchema = z.object({
  name: z.string().min(2, {
    message: "Form Name must be at least 2 characters.",
  }),
  isShowLabels: z.boolean(),
});

export default FormBuilderSchema;
