import quotation from "@assets/quotation.svg"
import { NavigationContext } from "@providers/navigation-provider"
import { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import { DATA } from "./data"

export default function Comments() {
    const { index } = useContext(NavigationContext)
    const {
        meta: { id, name, comment },
    } = DATA[index % DATA.length]

    return (
        <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl font-semibold flex items-baseline">
                <span>About&nbsp;</span>
                <Fade key={id} triggerOnce>
                    <span className="text-red-600">{name}</span>
                </Fade>
            </h4>
            <img
                src={quotation}
                alt="quotation"
                className="w-12 h-12 opacity-10"
            />
            <blockquote className="relative max-w-sm">
                <Fade key={id} triggerOnce>
                    {comment ? (
                        <p>{comment}</p>
                    ) : (
                        <p className="text-center">
                            <em>No comment.</em>
                        </p>
                    )}
                </Fade>
            </blockquote>
        </div>
    )
}
