import { ReactNode } from "react"

type Variant = 
  'primary' |
  'secondary' |
  'success' |
  'warning' |
  'danger';

type Size = 
  'small' |
  'medium' |
  'large';

export interface ButtonProps {
  children: ReactNode,
  variant?: Variant,
  size?: Size,
  type?: ButtonHTMLAttributes<HTMLButtonElement>,
  disabled?: boolean,
  handleOnClick?: (
    data: { 
      args?: T | T[], 
      event: MouseEvent<HTMLButtonElement, MouseEvent> 
  }) => T,
}