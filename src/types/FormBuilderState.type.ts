import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";

export default interface FormBuilderState {
  id: string;
  name: string;
  isShowLabels: boolean;
  fields: FormBuilderInput[];
}
