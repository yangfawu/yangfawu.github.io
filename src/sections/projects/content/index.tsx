import { NavigationContext } from "@providers/navigation-provider"
import { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import DATA from "../data"
import Description from "./description"
import Gallery from "./gallery"
import Links from "./links"
import Tags from "./tags"

export default function Content() {
    const { index } = useContext(NavigationContext)

    const { id, title, images, description, note, links, tags, isComplete } =
        DATA[index % DATA.length]

    return (
        <>
            <div className="space-y-2">
                <p className="text-sm font-bold text-red-600 uppercase">
                    currently viewing
                </p>
                <Fade key={id} triggerOnce>
                    <p className="text-3xl">{title}</p>
                </Fade>
            </div>
            <Gallery prefix={id} sources={images} />
            <div>
                <Tags prefix={id} data={tags} isComplete={isComplete} />
            </div>
            <div className="flex flex-wrap gap-8 items-start">
                <Description prefix={id} data={description} note={note} />
                <Links data={links} />
            </div>
        </>
    )
}
