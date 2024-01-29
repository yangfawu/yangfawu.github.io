import { NavigationContext } from "@providers/navigation-provider"
import { useContext } from "react"
import { DATA, ID_TO_INDEX, ToolDetails } from "./data"

interface Props {
    image: any
    meta: ToolDetails
}
export default function Item({
    image,
    meta: { id, name, link, new: isNew },
}: Props) {
    const { index, goto } = useContext(NavigationContext)

    function showComments() {
        goto(ID_TO_INDEX[id])
    }

    const activeId = DATA[index % DATA.length].meta.id

    return (
        <div className="flex flex-col items-center gap-1 group">
            <div
                className={`relative bg-slate-100 p-4 rounded-full group-hover:bg-red-600/20 transition-colors group-active:bg-red-600 ${activeId === id ? "bg-red-600/20" : ""}`}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 box-content object-contain"
                    onClick={showComments}
                />
                {isNew && (
                    <p className="absolute right-2 top-2 -translate-y-1/2 translate-x-1/2 text-xs bg-green-300 rounded-full px-2 py-1 font-mono">
                        new
                    </p>
                )}
            </div>
            <p className="text-sm font-medium">
                <a
                    className="hover:underline hover:text-red-600 underline-offset-2"
                    href={link}
                    target="_blank"
                >
                    {name}
                </a>
            </p>
        </div>
    )
}
