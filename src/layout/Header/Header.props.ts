import { DetailedHTMLProps, HTMLAttributes } from "react"
import { navLink } from "../../interfaces"

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  list: navLink[]
}
