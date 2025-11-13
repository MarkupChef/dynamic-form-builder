import InputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice.ts";

const InputText = ({ field }: { field: FormBuilderInputTextField }) => {
  return (
    <>
      <Label htmlFor={field.id}>{field.label}</Label>
      <div className={"flex gap-2"}>
        <Input
          id={field.id}
          placeholder={field.placeholder}
          required={field.required}
        />
        <InputTextSettings field={field} />
      </div>
    </>
  );
};

export default InputText;
