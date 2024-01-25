interface Props {
    highlight?: boolean
    children: string
}
export default function Tag({ highlight, children }: Props) {
    return (
        <span
            className={`px-3 py-1 rounded-full text-black text-sm font-mono font-semibold  ${highlight ? "bg-yellow-100" : "bg-slate-300"}`}
        >
            {children}
        </span>
    )
}
