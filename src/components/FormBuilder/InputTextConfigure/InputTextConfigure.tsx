import InputText from "@/components/FormBuilder/InputText";
import InputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings";
import { FormLabel } from "@/components/ui/form.tsx";
import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice.ts";

const InputTextConfigure = ({
  field,
}: {
  field: FormBuilderInputTextField;
}) => {
  return (
    <>
      <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
      <div className={"flex gap-2"}>
        <InputText fieldProps={field.props} />
        <InputTextSettings field={field} />
      </div>
    </>
  );
};

export default InputTextConfigure;
