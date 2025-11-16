import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";

export function createDefaultValues(fields: FormBuilderInput[]) {
  const defaults: Record<string, any> = {};

  fields.forEach((f) => {
    const name = f.id;

    switch (f.props.type) {
      case "text":
      case "number":
        defaults[name] = "";
        break;
      default:
        defaults[name] = undefined;
    }
  });

  return defaults;
}
