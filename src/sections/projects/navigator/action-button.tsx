import { ReactNode } from "react"

interface Props {
    onClick: () => void
    children?: ReactNode
}
export default function ActionButton({ onClick, children }: Props) {
    return (
        <button
            className="rounded-full w-7 h-7 p-1 hover:bg-slate-100 hover:text-slate-800"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
