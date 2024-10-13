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
}