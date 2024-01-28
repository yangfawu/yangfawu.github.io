import { ReactNode } from "react"

interface Props {
    id: number
    anchor: string
    title: string
    color?: string
    background?: string
    children?: ReactNode
}
export default function Section({ id, anchor, title, color, background, children }: Props) {
    return (
        <div className={`min-h-40 py-6 ${background || ""}`}>
            <div id={anchor} className="h-1">
                <span className="sr-only">The #{anchor} Section</span>
            </div>
            <div className="mx-auto max-w-7xl pl-2 pr-6 sm:px-6 lg:px-8 flex items-stretch gap-2 sm:gap-4">
                <div className="flex-1 relative pb-2 max-w-12 sm:max-w-16">
                    <div className="font-mono text-md sm:text-lg w-fit sticky top-4 left-0 box-border mt-2 rotate-90 origin-bottom-left -translate-y-full">
                        <h3 className="text-red-600">
                            {String(id).padStart(3, "0")}
                        </h3>
                        <h3 className={`whitespace-nowrap ${color || ""}`}>{title}</h3>
                    </div>
                </div>
                <div className={`flex-1 ${color || ""}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
