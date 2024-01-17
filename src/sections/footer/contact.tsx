import { ElementType, ReactNode } from "react"

interface Props {
    Icon: ElementType
    children?: ReactNode
}
export default function Contact({ Icon, children }: Props) {
    return (
        <div className="flex items-center justify-start gap-4">
            <div><Icon className="h-5" /></div>
            <p className="text-sm">{children}</p>
        </div>
    )
}
