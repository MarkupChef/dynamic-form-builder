import type { CommonInputPropsType } from "@/types/CommonInputProps.type.ts";

export interface InputNumberProps extends CommonInputPropsType {
  type: "number";
  value?: string;
  max?: number;
  min?: number;
}
