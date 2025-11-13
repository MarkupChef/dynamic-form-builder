import InputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice.ts";

const InputText = ({ field }: { field: FormBuilderInputTextField }) => {
  const minLengthProp = {
    ...(field.minLength && field.minLength > 0
      ? { minLength: field.minLength }
      : {}),
  };

  const maxLengthProp = {
    ...(field.maxLength && field.maxLength > 0
      ? { maxLength: field.maxLength }
      : {}),
  };

  return (
    <>
      <Label htmlFor={field.id}>{field.label}</Label>
      <div className={"flex gap-2"}>
        <Input
          id={field.id}
          type={field.typeValue}
          placeholder={field.placeholder}
          required={field.required}
          {...minLengthProp}
          {...maxLengthProp}
        />
        <InputTextSettings field={field} />
      </div>
    </>
  );
};

export default InputText;
