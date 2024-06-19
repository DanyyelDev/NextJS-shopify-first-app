import { HTMLAttributes, createElement } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps ={
    children: string
    tag: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({tag, children, ...rest}: SanitizeHTMLProps) =>{
    const sanitizedHtml = sanitize(children, {
        allowedTags: ['b','i','em','strong']
    })

    return createElement(
        tag,
        {...rest},
        sanitizedHtml
    )
}