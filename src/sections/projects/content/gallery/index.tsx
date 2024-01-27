import Item from "./item"
import Placeholder from "./placeholder"

interface Props {
    sources: HTMLImageElement["src"][]
}
export default function Gallery({ sources }: Props) {
    return (
        <div className="relative rounded-xl overflow-auto">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-0">
                <Placeholder />
                {sources.map((src, i) => (
                    <Item key={i} src={src} />
                ))}
            </div>
        </div>
    )
}
