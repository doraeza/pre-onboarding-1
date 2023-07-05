import { ReactNode } from "react"

export interface RouterContext {
    path: string
    changePath(value: string): void
  }

export interface LinkProps {
    to: string
    children?: ReactNode
  }

export interface RouterProps {
    children?: ReactNode
  }

export interface RoutesProps {
    children: ReactNode
  }

export interface RouteProps {
    path: string
    element: ReactNode
  }