import type { CommonInputPropsType } from "@/types/CommonInputProps.type.ts";

export interface InputTextProps extends CommonInputPropsType {
  type: "text" | "email";
  value?: string;
  maxLength?: number;
  minLength?: number;
}
