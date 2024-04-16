import { createElement, HTMLAttributes } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps = {
  children: string,
  tag: string,
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ children, tag, ...rest }: SanitizeHTMLProps) => {
  const sanitizeHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong']
  })
  return createElement(
    tag,
    { ...rest },
    sanitizeHTML
  )
}