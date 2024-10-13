import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  type: HTMLInputTypeAttribute,
  disabled?: boolean,
  placeholder?: string
}