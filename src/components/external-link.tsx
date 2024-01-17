import { ReactNode } from "react"

interface Props {
    href: string
    children?: ReactNode
}
export default function ExternalLink({ href, children }: Props) {
    return (
        <a className="underline underline-offset-2 hover:text-red-600" href={href} target="_blank">
            {children}
        </a>
    )
}
