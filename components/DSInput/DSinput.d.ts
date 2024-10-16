import { InputHTMLAttributes, ReactNode } from "react";

type InputAttributeType =
  "button" |
  "checkbox" |
  "color" |
  "date" |
  "datetime-local" |
  "email" |
  "file" |
  "hidden" |
  "image" |
  "month" |
  "number" |
  "password" |
  "radio" |
  "range" |
  "reset" |
  "search" |
  "submit" |
  "tel" |
  "text" |
  "time" |
  "url" |
  "week";

type InputSize =
  'small' |
  'large';

type AlignText = 
  'center' |
  'left' |
  'right'

export enum IconType {
  ARROW_DROP_DOWN = '/arrow_drop_down.png'
} 


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputAttributeType,
  align?: AlignText,
  disabled?: boolean,
  placeholder?: string,
  inputSize?: InputSize,
  "input-size"?: InputSize,
  suffix?: IconType
}