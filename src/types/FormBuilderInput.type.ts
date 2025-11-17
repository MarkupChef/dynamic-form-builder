import type { InputProps } from "@/types/InputProps.type.ts";

export default interface FormBuilderInput {
  formBuilderFieldType: string;
  id: string;
  label?: string;
  props: InputProps;
}
