import { z } from "zod";

const InputNumberSettingsSchema = z.object({
  label: z.string().optional(),
  id: z.string(),
  required: z.boolean(),
  placeholder: z.string().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  type: z.literal("number"),
});

export default InputNumberSettingsSchema;
