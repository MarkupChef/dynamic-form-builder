import InputNumber from "@/components/FormBuilder/InputNumber";
import InputNumberSettings from "@/components/FormBuilder/InputNumber/InputNumberSettings";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import type { InputNumberProps } from "@/types/InputNumberProps.type.ts";

const InputNumberConfigure = ({ field }: { field: FormBuilderInput }) => {
  return (
    <div className={"flex gap-2"}>
      <InputNumber fieldProps={field.props as InputNumberProps} />
      <InputNumberSettings field={field} />
    </div>
  );
};

export default InputNumberConfigure;
