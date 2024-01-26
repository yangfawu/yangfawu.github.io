import { ReactNode } from "react"

interface Props {
    title: string
    data: {
        name: string
        logo: any
    }[]
    children?: ReactNode
}
export default function Column({ title, data }: Props) {
    return (
        <div className="space-y-6 flex-1 xs:min-w-60">
            <h3 className="text-left sm:text-center text-xl text-red-600 font-mono uppercase font-semibold">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:justify-center">
                {data.map(({ name, logo }) => (
                    <div
                        key={name}
                        className="rounded-full w-24 h-24 p-2 bg-slate-100 box-border relative hover:bg-slate-400 transition-[background-color] group"
                    >
                        <img
                            src={logo}
                            alt={name}
                            className="w-14 h-14 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="hidden group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-1 z-50">
                            <p className="bg-slate-800 text-slate-100 p-1 text-sm font-mono rounded-sm">
                                {name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
