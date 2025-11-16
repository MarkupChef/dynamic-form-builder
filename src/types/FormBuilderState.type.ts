import type FormBuilderInputTextField from "@/types/FormBuilderInputTextField.type";

export default interface FormBuilderState {
  id: string;
  name: string;
  isShowLabels: boolean;
  fields: FormBuilderInputTextField[];
}
