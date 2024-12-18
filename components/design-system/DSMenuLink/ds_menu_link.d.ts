import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react"

export interface MenuLinkProps {
  href: Url,
  noBorders?: boolean
  children?: ReactNode,
  active?: 'on' | 'off'
} 