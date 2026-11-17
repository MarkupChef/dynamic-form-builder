import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { z } from "zod";

export function createDynamicSchema(fields: FormBuilderInput[]) {
  const shape: Record<string, z.ZodType> = {};

  fields.forEach(({ props }) => {
    let schema: z.ZodType;

    if (!props.name) {
      return;
    }

    switch (props.type) {
      case "text": {
        let textSchema = z.string();

        if (props.minLength !== undefined) {
          textSchema = textSchema.min(
            props.minLength,
            `Input must be at least ${props.minLength} characters`,
          );
        }

        if (props.maxLength !== undefined) {
          textSchema = textSchema.max(props.maxLength);
        }

        schema = props.required
          ? textSchema.min(1, "Field is required")
          : textSchema.optional();
        break;
      }

      case "email": {
        const emailSchema = z.email("Input must be a valid email address");

        schema = props.required
          ? emailSchema
          : z
              .union([z.literal(""), emailSchema])
              .optional()
              .transform((val) => (val === "" ? undefined : val));
        break;
      }

      case "number": {
        const { min, max } = props;

        schema = (
          props.required
            ? z.string().min(1, "Field is required")
            : z.string().optional()
        )
          .transform((val, ctx) => {
            if (val === undefined || val === "") {
              return undefined;
            }

            const parsed = Number(val);

            if (Number.isNaN(parsed)) {
              ctx.addIssue({
                code: "custom",
                message: "Input must be a valid number",
              });
              return z.NEVER;
            }

            return parsed;
          })
          .refine(
            (v) => v === undefined || min === undefined || v >= min,
            `The value must be at least ${min}`,
          )
          .refine(
            (v) => v === undefined || max === undefined || v <= max,
            `The value must be at most ${max}`,
          );

        break;
      }

      default: {
        schema = z.unknown().optional();
      }
    }

    shape[props.name] = schema;
  });

  return z.object(shape);
}
