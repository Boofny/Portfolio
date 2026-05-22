import type { ReactElement } from "react"

export type CompCardFooter = {
  TechName: string | ReactElement,
  Icon: ReactElement,
  // Links: ProjectLinks
}

export type ProjectLinks = {
  GitHubLink?: string 
  WebsiteLink?: string
}
