import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}
export default function UnderlineSpan({ children }: Props) {
    return (
        <span className
            ="underline underline-offset-4 decoration-2 decoration-blue-400 dark:decoration-blue-600">
            {children}
        </span>
    )
}