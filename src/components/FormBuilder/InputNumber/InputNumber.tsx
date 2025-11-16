import { Input } from "@/components/ui/input.tsx";
import type { InputNumberProps as InputNumberPropsType } from "@/types/InputNumberProps.type.ts";
import type { FC } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

interface InputNumberProps {
  fieldProps: InputNumberPropsType;
  field?: ControllerRenderProps<FieldValues, string>;
}

const InputNumber: FC<InputNumberProps> = ({ fieldProps, field = {} }) => {
  const minProp = {
    ...(fieldProps.min && fieldProps.min > 0 ? { min: fieldProps.min } : {}),
  };

  const maxProp = {
    ...(fieldProps.max && fieldProps.max > 0 ? { max: fieldProps.max } : {}),
  };

  return (
    <Input
      {...field}
      id={fieldProps.id}
      type={fieldProps.type}
      placeholder={fieldProps.placeholder}
      required={fieldProps.required}
      {...minProp}
      {...maxProp}
    />
  );
};

export default InputNumber;
