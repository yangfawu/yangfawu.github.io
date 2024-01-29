import { ReactNode, createContext, useEffect, useMemo, useState } from "react"

interface ContextProps {
    size: number
    index: number
    auto: boolean
    progress: number
    back: () => void
    next: () => void
    goto: (index: number) => void
    toggle: () => void
}
export const NavigationContext = createContext<ContextProps>(null as any)

interface Props {
    data: Array<any>
    duration: number // seconds
    skewness?: number // [0 to 1]
    children?: ReactNode
}
export default function NavigationProvider({
    data,
    duration,
    skewness = 0,
    children,
}: Props) {
    const [index, setIndex] = useState(() => {
        // skew towards bigger indices
        const skewedRandom = Math.pow(Math.random(), 1 - skewness)

        // obtain a skewed random index
        return Math.floor(skewedRandom * data.length)
    })

    function next() {
        setIndex(prev => {
            const next = prev + 1
            return next < data.length ? next : 0
        })
    }

    function goto(index: number) {
        setIndex(index % data.length)
    }

    function back() {
        setIndex(prev => {
            const next = prev - 1
            return next < 0 ? data.length - 1 : next
        })
    }

    const [onAuto, setAuto] = useState(true)
    const [progress, setProgress] = useState(0)

    function toggle() {
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
        if (progress > duration) next()
    }, [progress, duration])

    const cssProgress = useMemo(
        () => Math.round((progress / duration) * 100),
        [progress, duration],
    )

    return (
        <NavigationContext.Provider
            value={{
                size: data.length,
                index,
                auto: onAuto,
                progress: cssProgress,
                back,
                next,
                goto,
                toggle,
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}
