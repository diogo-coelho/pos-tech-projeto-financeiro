import { InputProps } from "../DSInput/ds_input";

export interface SelectProps extends InputProps {
  options?: string[],
  selected?: string,
  selectedValue?: string,
  error?: string,
  handleOnSelect?: (
    data: { 
      args?: T | T[], 
      event: ChangeEvent<HTMLInputElement>
  }) => T,
  handleOnSelectClick?: (
    data: { 
      args?: T | T[], 
      event: ChangeEvent<HTMLInputElement>
  }) => T,
}