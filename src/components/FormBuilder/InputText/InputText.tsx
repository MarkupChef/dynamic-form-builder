import { Input } from "@/components/ui/input.tsx";
import type { FC, InputHTMLAttributes } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

interface InputTextProps {
  fieldProps: InputHTMLAttributes<HTMLInputElement>;
  field?: ControllerRenderProps<FieldValues, string>;
}

const InputText: FC<InputTextProps> = ({ fieldProps, field = {} }) => {
  const minLengthProp = {
    ...(fieldProps.minLength && fieldProps.minLength > 0
      ? { minLength: fieldProps.minLength }
      : {}),
  };

  const maxLengthProp = {
    ...(fieldProps.maxLength && fieldProps.maxLength > 0
      ? { maxLength: fieldProps.maxLength }
      : {}),
  };

  return (
    <Input
      {...field}
      id={fieldProps.id}
      type={fieldProps.type}
      placeholder={fieldProps.placeholder}
      required={fieldProps.required}
      {...minLengthProp}
      {...maxLengthProp}
    />
  );
};

export default InputText;
