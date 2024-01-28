import { ReactNode, createContext, useEffect, useMemo, useState } from "react"

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

const PROJECT_DURATION = 20 // seconds

interface Props {
    data: Array<any>
    children?: ReactNode
}
export default function NavigationProvider({ data, children }: Props) {
    const [index, setIndex] = useState(() => {
        // skew towards bigger indices
        const skewedRandom = Math.pow(Math.random(), 1 - 0.7)

        // obtain a skewed random index
        return Math.floor(skewedRandom * data.length)
    })

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
