import { Url } from "next/dist/shared/lib/router/router";
import { AnchorHTMLAttributes, ReactNode } from "react"

export interface MenuLinkProps {
  href: Url,
  children?: ReactNode,
}