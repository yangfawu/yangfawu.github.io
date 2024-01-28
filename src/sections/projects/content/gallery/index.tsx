import { Fade } from "react-awesome-reveal"
import Item from "./item"

interface Props {
    prefix: string | number
    sources: HTMLImageElement["src"][]
}
export default function Gallery({ prefix, sources }: Props) {
    return (
        <div className="rounded-xl w-full flex space-x-6 overflow-x-auto hide-scrollbar">
            {sources.length < 1 ? (
                <Fade
                    key={`${prefix}-not-found`}
                    className="w-80 h-40 rounded-lg bg-slate-300 p-2 box-border flex items-center justify-center"
                    triggerOnce
                >
                    <p className="font-mono text-sm text-black">
                        no images found
                    </p>
                </Fade>
            ) : (
                <Fade
                    key={`${prefix}-found`}
                    cascade
                    direction="left"
                    damping={0.2}
                    className="snap-center shrink-0"
                    triggerOnce
                >
                    {sources.map((src, i) => (
                        <Item key={i} src={src} />
                    ))}
                </Fade>
            )}
        </div>
    )
}
