import InputText from "@/components/FormBuilder/InputText";
import InputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings";
import { FormLabel } from "@/components/ui/form.tsx";
import { useAppSelector } from "@/redux-store/hooks.ts";
import type FormBuilderInputTextField from "@/types/FormBuilderInputTextField.type";

const InputTextConfigure = ({
  field,
}: {
  field: FormBuilderInputTextField;
}) => {
  const formBuilder = useAppSelector((state) => state.formBuilder);

  return (
    <>
      {formBuilder.isShowLabels ? (
        <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
      ) : null}

      <div className={"flex gap-2"}>
        <InputText fieldProps={field.props} />
        <InputTextSettings field={field} />
      </div>
    </>
  );
};

export default InputTextConfigure;
