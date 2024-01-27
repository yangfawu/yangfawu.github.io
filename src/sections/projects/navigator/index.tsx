import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PauseIcon,
    PlayIcon,
} from "@heroicons/react/24/outline"
import TextTransition from "react-text-transition"
import ActionButton from "./action-button"
import { useContext } from "react"
import { NavigationContext } from "../navigation-provider"

export default function Navigator() {
    const { size, index, auto, progress, toggle, back, next } =
        useContext(NavigationContext)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-end gap-2">
                <ActionButton onClick={back}>
                    <ChevronLeftIcon />
                </ActionButton>
                <div className="font-mono flex items-center gap-2">
                    <TextTransition className="text-red-600">
                        {formatNumber(index + 1)}
                    </TextTransition>
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
                    <div className="h-1 w-full bg-slate-300 rounded-full">
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
