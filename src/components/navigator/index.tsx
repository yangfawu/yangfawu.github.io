import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PauseIcon,
    PlayIcon,
} from "@heroicons/react/24/outline"
import { NavigationContext } from "@providers/navigation-provider"
import { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import ActionButton from "./action-button"

interface Props {
    dark?: boolean
}
export default function Navigator({ dark }: Props) {
    const { size, index, auto, progress, toggle, back, next } =
        useContext(NavigationContext)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-end gap-2">
                <ActionButton onClick={back}>
                    <ChevronLeftIcon />
                </ActionButton>
                <div className="font-mono flex items-baseline gap-2">
                    <Fade direction="up" duration={300}>
                        <span key={index} className="text-red-600">
                            {formatNumber(index + 1)}
                        </span>
                    </Fade>
                    <span>/</span>
                    <span>{formatNumber(size)}</span>
                </div>
                <ActionButton onClick={next}>
                    <ChevronRightIcon />
                </ActionButton>
                <ActionButton onClick={toggle}>
                    {auto ? <PauseIcon /> : <PlayIcon />}
                </ActionButton>
            </div>
            {auto && (
                <div className="max-w-32 ml-auto">
                    <div className={`h-1 w-full ${dark ? "bg-slate-800" : "bg-slate-300"} rounded-full`}>
                        <div
                            className="h-1 bg-red-600 transition-[width]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

function formatNumber(d: number) {
    return String(d).padStart(3, "0")
}
