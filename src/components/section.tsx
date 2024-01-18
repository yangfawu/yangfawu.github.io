import { ReactNode } from "react"

interface Props {
    id: number
    title: string
    color?: string
    background?: string
    children?: ReactNode
}
export default function Section({ id, title, color, background, children }: Props) {
    return (
        <div className={`min-h-40 py-6 ${background || ""}`}>
            <div className="mx-auto max-w-7xl pl-2 pr-4 sm:px-6 lg:px-8 flex items-stretch gap-4">
                <div className="flex-1 relative top-0 max-w-16">
                    <div className="font-mono text-lg min-w-16 sticky top-4 left-0 rotate-90 mt-2 mr-2 origin-bottom-left -translate-y-full">
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
