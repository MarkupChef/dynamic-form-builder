import type { FormBuilderFieldTypes } from "@/types/FormBuilderInputTypes.type.ts";

export interface CommonInputPropsType {
  id: string;
  name: string;
  placeholder?: string;
  required: boolean;
  type: FormBuilderFieldTypes;
}
