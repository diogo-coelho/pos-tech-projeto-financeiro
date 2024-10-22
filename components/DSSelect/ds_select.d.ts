import { InputProps } from "../DSInput/ds_input";

export interface SelectProps extends InputProps {
  options?: string[],
  selected?: string,
  selectedValue?: string
}