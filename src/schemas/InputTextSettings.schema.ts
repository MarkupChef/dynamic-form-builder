import { z } from "zod";

const InputTextSettingsSchema = z.object({
  label: z.string().optional(),
  id: z.string(),
  required: z.boolean(),
  placeholder: z.string().optional(),
  minLength: z.number().int().nonnegative().optional(),
  maxLength: z.number().int().nonnegative().optional(),
  type: z.enum(["text", "email"]),
});

export default InputTextSettingsSchema;
