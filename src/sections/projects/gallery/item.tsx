interface Props {
    src: HTMLImageElement["src"]
}
export default function Item({ src }: Props) {
    return (
        <div className="snap-center shrink-0">
            <img
                className="shrink-0 w-80 h-40 rounded-lg bg-slate-300"
                src={src}
            />
        </div>
    )
}
