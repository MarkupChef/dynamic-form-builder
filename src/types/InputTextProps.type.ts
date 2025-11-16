import type { CommonInputPropsType } from "@/types/CommonInputProps.type.ts";

export interface InputTextProps extends CommonInputPropsType {
  maxLength?: number;
  minLength?: number;
}
