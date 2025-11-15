import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice.ts";

export function createDefaultValues(fields: FormBuilderInputTextField[]) {
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
