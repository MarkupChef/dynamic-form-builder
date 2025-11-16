import InputNumber from "@/components/FormBuilder/InputNumber";
import InputNumberSettings from "@/components/FormBuilder/InputNumber/InputNumberSettings";
import { FormLabel } from "@/components/ui/form.tsx";
import { useAppSelector } from "@/redux-store/hooks.ts";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";

const InputNumberConfigure = ({ field }: { field: FormBuilderInput }) => {
  const formBuilder = useAppSelector((state) => state.formBuilder);

  return (
    <>
      {formBuilder.isShowLabels ? (
        <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
      ) : null}

      <div className={"flex gap-2"}>
        <InputNumber fieldProps={field.props} />
        <InputNumberSettings field={field} />
      </div>
    </>
  );
};

export default InputNumberConfigure;
