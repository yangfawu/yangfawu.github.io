import { ReactNode, createContext, useEffect, useMemo, useState } from "react"
import { PROJECT_DURATION } from "./config"

interface ContextProps {
    size: number
    index: number
    auto: boolean
    progress: number
    back: () => void
    next: () => void
    toggle: () => void
}
export const NavigationContext = createContext<ContextProps>(null as any)

interface Props {
    data: Array<any>
    children: ReactNode
}
export default function NavigationProvider({ data, children }: Props) {
    const [index, setIndex] = useState(Math.floor(Math.random() * data.length))

    function cycleNext() {
        setIndex(prev => {
            const next = prev + 1
            return next < data.length ? next : 0
        })
    }

    function cycleBack() {
        setIndex(prev => {
            const next = prev - 1
            return next < 0 ? data.length - 1 : next
        })
    }

    const [onAuto, setAuto] = useState(true)
    const [progress, setProgress] = useState(0)

    function toggleAuto() {
        setAuto(prev => !prev)
    }

    useEffect(() => {
        setProgress(0)
    }, [index])

    useEffect(() => {
        if (!onAuto) return
        const id = window.setInterval(() => setProgress(prev => prev + 1), 1000)
        return () => window.clearInterval(id)
    }, [onAuto])

    useEffect(() => {
        if (progress > PROJECT_DURATION) cycleNext()
    }, [progress])

    const cssProgress = useMemo(
        () => Math.round((progress / PROJECT_DURATION) * 100),
        [progress],
    )

    return (
        <NavigationContext.Provider
            value={{
                size: data.length,
                index,
                auto: onAuto,
                progress: cssProgress,
                back: cycleBack,
                next: cycleNext,
                toggle: toggleAuto,
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}
