import type { FormBuilderFieldTypes } from "@/types/FormBuilderInputTypes.type.ts";

interface FormBuilderFieldListProps {
  label: string;
  value: FormBuilderFieldTypes;
}

export const formBuilderFieldTypes: FormBuilderFieldListProps[] = [
  { label: "Input Text", value: "text" },
];
