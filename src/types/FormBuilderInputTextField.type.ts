export default interface FormBuilderInputTextField {
  formBuilderFieldType: string;
  id: string;
  label: string;
  props: {
    id: string;
    name: string;
    value: string;
    placeholder: string;
    required: boolean;
    maxLength?: number;
    minLength?: number;
    type: string;
  };
}
