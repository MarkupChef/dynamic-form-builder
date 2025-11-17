import { z } from "zod";

const InputNumberSettingsSchema = z.object({
  label: z.string(),
  id: z.string(),
  required: z.boolean(),
  placeholder: z.string(),
  min: z.number(),
  max: z.number(),
  type: z.string(),
});

export default InputNumberSettingsSchema;
