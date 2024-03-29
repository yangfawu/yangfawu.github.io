import { ReactNode } from "react"

interface Props {
    title: string
    children?: ReactNode
}
export default function Column({ title, children }: Props) {
    return (
        // overflow-x-hidden is used to prevent horizontal scrollbar during animations
        <div className="w-full max-w-md space-y-4 md:flex-1 md:w-auto overflow-x-hidden">
            <h4 className="text-2xl uppercase font-semibold text-slate-400">
                {title}
            </h4>
            {children}
        </div>
    )
}
