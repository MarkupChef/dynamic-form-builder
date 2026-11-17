import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";

export type DefaultValues = Record<string, string | undefined>;

export function createDefaultValues(fields: FormBuilderInput[]): DefaultValues {
  const defaults: DefaultValues = {};

  fields.forEach(({ props }) => {
    const name = props.name;

    if (!name) {
      return;
    }

    switch (props.type) {
      case "text":
      case "email":
      case "number":
        defaults[name] = "";
        break;
      default:
        defaults[name] = undefined;
    }
  });

  return defaults;
}
