import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { z } from "zod";

export function createDynamicSchema(fields: FormBuilderInput[]) {
  const shape: Record<string, any> = {};

  fields.forEach(({ props }) => {
    let schema;

    const fieldType = props.type;

    if (!props.name) {
      return {};
    }

    switch (fieldType) {
      case "text": {
        schema = z.string();

        if (props.minLength !== undefined) {
          schema = schema.min(
            props.minLength,
            `Input must be at least ${props.minLength} characters`,
          );
        }

        if (props.maxLength !== undefined) {
          schema = schema.max(props.maxLength);
        }

        if (props.required) {
          schema = schema.min(1, "Field is required");
        } else {
          schema = schema.optional();
        }
        break;
      }

      case "email": {
        schema = z.email("Input must be a valid email address");

        if (!props.required) {
          schema = schema.optional();
        }
        break;
      }

      case "number": {
        if (props.required) {
          schema = z.string().min(1, "Field is required");
        } else {
          schema = z.string().optional();
        }

        schema = schema.transform((val) => Number(val));

        if (props.min !== undefined) {
          schema = schema.refine(
            (v) => v >= props.min!,
            `The value must be at least ${props.min}`,
          );
        }

        if (props.max !== undefined) {
          schema = schema.refine(
            (v) => v <= props.max!,
            `The value must be at most ${props.max}`,
          );
        }

        break;
      }

      default: {
        schema = z.any().optional();
      }
    }

    shape[props.name] = schema;
  });

  return z.object(shape);
}
