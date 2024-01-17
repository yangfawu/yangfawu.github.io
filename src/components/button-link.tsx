import { ReactNode } from "react"

interface Props {
    href: string
    children?: ReactNode
}
export default function ButtonLink({ href, children }: Props) {
    return (
        <a className="border-2 border-black text-black font-mono py-2 px-4 transition duration-300 hover:bg-slate-100 hover:text-red-600" href={href}>
            {children}
        </a>
    )
}