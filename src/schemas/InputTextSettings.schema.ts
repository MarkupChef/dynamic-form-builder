import { z } from "zod";

const InputTextSettingsSchema = z.object({
  label: z.string(),
  id: z.string(),
  required: z.boolean(),
  placeholder: z.string(),
  minLength: z.number(),
  maxLength: z.number(),
  type: z.string(),
});

export default InputTextSettingsSchema;
