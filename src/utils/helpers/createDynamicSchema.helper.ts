import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { z } from "zod";

export function createDynamicSchema(fields: FormBuilderInput[]) {
  const shape: Record<string, any> = {};

  fields.forEach((field) => {
    let schema;

    const props = field.props;

    if (!props.name) {
      return {};
    }

    if (props.type === "text") {
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
    }

    if (props.type === "email") {
      schema = z.email("Input must be a valid email address");

      if (!props.required) {
        schema = schema.optional();
      }
    }

    shape[props.name] = schema;
  });

  return z.object(shape);
}
