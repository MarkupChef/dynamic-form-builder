import InputText from "@/components/FormBuilder/InputText";
import InputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import type { InputTextProps } from "@/types/InputTextProps.type.ts";

const InputTextConfigure = ({ field }: { field: FormBuilderInput }) => {
  return (
    <div className={"flex gap-2"}>
      <InputText fieldProps={field.props as InputTextProps} />
      <InputTextSettings field={field} />
    </div>
  );
};

export default InputTextConfigure;
