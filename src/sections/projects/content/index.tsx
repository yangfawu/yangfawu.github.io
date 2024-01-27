import { useContext } from "react"
import { NavigationContext } from "../navigation-provider"
import DATA from "../data"
import Gallery from "./gallery"
import Tags from "./tags"
import Description from "./description"
import Links from "./links"

export default function Content() {
    const { index } = useContext(NavigationContext)

    const { title, images, description, note, links, tags, isComplete } =
        DATA[index]

    return (
        <>
            <div className="space-y-2">
                <p className="text-sm font-bold text-red-600 uppercase">
                    currently viewing
                </p>
                {/* <TextTransition className="text-3xl">
                        {DATA[index].title}
                    </TextTransition> */}
                <p className="text-3xl">{title}</p>
            </div>
            <Gallery sources={images} />
            <div>
                <Tags data={tags} isComplete={isComplete} />
            </div>
            <div className="flex flex-wrap gap-8 items-start">
                <Description data={description} note={note} />
                <Links data={links} />
            </div>
        </>
    )
}
