import type { ReactElement } from "react"

export type CompCardFooter = {
  TechName: string | ReactElement,
  Icon: ReactElement,
}

export type ProjectLinks = {
  GitHubLink?: string 
  WebsiteLink?: string
  Docker?: string
}
