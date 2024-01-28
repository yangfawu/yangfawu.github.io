import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline"
import { ImageViewerContext } from "@providers/image-viewer-provider"
import { useContext } from "react"

interface Props {
    src: HTMLImageElement["src"]
}
export default function Item({ src }: Props) {
    const { spotlight } = useContext(ImageViewerContext)

    const enlarge = () => spotlight(src)

    return (
        <div className="relative group">
            <img
                className="w-80 h-40 bg-slate-300 object-contain rounded-lg"
                src={src}
            />
            <button
                className="absolute top-0 bottom-0 w-full h-full bg-slate-900/70 flex items-end justify-end rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 box-border group-hover:border-2 border-slate-100"
                onClick={enlarge}
            >
                <ArrowsPointingOutIcon className="w-6 h-6 text-white active:animate-ping m-1" />
            </button>
        </div>
    )
}
