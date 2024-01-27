interface Props {
    highlight?: boolean
    children: string
}
export default function Item({ highlight, children }: Props) {
    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-black text-sm font-mono font-semibold  ${highlight ? "bg-yellow-100 animate-pulse" : "bg-slate-300"}`}
        >
            {children}
        </span>
    )
}
