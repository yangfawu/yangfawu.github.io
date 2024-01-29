import { NavigationContext } from "@providers/navigation-provider"
import { useContext } from "react"
import { DATA, ID_TO_INDEX } from "./data"

interface Props {
    id: string
    image: any
    name: string
    link: string
}
export default function Item({ id, image, name, link }: Props) {
    const { index, goto } = useContext(NavigationContext)

    function showComments() {
        goto(ID_TO_INDEX[id])
    }

    const activeId = DATA[index % DATA.length].meta.id

    return (
        <div className="flex flex-col items-center gap-1 group">
            <div
                className={`bg-slate-100 p-4 rounded-full group-hover:bg-red-600/20 transition-colors group-active:bg-red-600 ${activeId === id ? "bg-red-600/20" : ""}`}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 box-content object-contain"
                    onClick={showComments}
                />
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
